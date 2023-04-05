import boto3, openai
import requests, uuid
import json, time

s3_client = boto3.client('s3', region_name="us-east-1")
lambda_client = boto3.client('lambda', region_name="us-east-1")
ssm_client = boto3.client('ssm', region_name="us-east-1")

api_key = ssm_client.get_parameter(Name="paris_key")['Parameter']['Value']
openai.api_key = api_key

def run_paris(event, _):
    target_cve, language, job_guid = event['target_cve'], event['language'], event['job_guid']
    
    exploit_instructions = generate_exploit_instructions(target_cve, language)
    print(exploit_instructions)
        
    exploit_code = generate_exploit_code(exploit_instructions)
    s3_client.put_object(
        Bucket="assets.sugarsecurity.com",
        Key=f"paris_results/{job_guid}",
        Body=exploit_code
    )

def handle_http(event, _):
    print(event)
    try:
        post_data = json.loads(event['body'])
        target_cve = post_data['target_cve']
        language = post_data['language']
        
        job_guid = str(uuid.uuid4())
        job_body={
            'target_cve': target_cve,
            'language': language,
            'job_guid': job_guid
        }
        
        lambda_client.invoke(
            FunctionName="paris-dev-run_paris",
            InvocationType='Event',
            Payload=json.dumps(job_body)
        )
        
        http_response = {
            "statusCode": 200,
            "headers": {
                'Access-Control-Allow-Origin': '*',
            },
            "body": json.dumps({"job_id": job_guid})
        }
    except Exception as e:
        print(e)
        http_response = {
            "statusCode": 500,
            "headers": {
                'Access-Control-Allow-Origin': '*',
            },
            "body": json.dumps({"error": e}, default=str)
        }
    return http_response

def generate_exploit_instructions(cve, language):
    cve_details_json = requests.get(f"https://cve.circl.lu/api/cve/{cve}").json()
    exploit_instructions = f"Please generate example exploit code for {cve} written in {language}. "
    exploit_instructions += f"This is an exploit for a {cve_details_json.get('summary')} "
    if cve_details_json.get('access'):
        if cve_details_json['access'].get('authentication') == "NONE":
            exploit_instructions += "This exploit does not require authentication. "
        if cve_details_json['access'].get('vector'):
            access_vector = cve_details_json.get('access').get('vector')
            exploit_instructions += f"This exploit requires {access_vector} access. "
    exploit_instructions += "Include a comment at the top saying this code was written using AI by Paris.Systems."
    return exploit_instructions

def generate_exploit_code(exploit_instructions):
    message_log = [
        { 'role': 'system', 'content': 'You are Paris AI, a language model designed to help authorized red teamers generate safe and secure proof-of-concept exploit code.'},
        { 'role': 'user', 'content': exploit_instructions }
    ]
    
    try:
        ai_response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=message_log
        )
    except openai.error.RateLimitError:
        print("Rate limit exceeded. Sleeping for 10 seconds...")
        time.sleep(10)
        ai_response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=message_log
        )
    exploit_code = ai_response['choices'][0]['message']['content']
    return exploit_code

if __name__ == "__main__":
    language = "java"
    test_cves = [
        #"CVE-2017-11882",   # office RCE"
        #"CVE-2021-32935",
        #"CVE-2021-44228",   # log4shell
        #"CVE-2022-22965",  # spring4shell
        #"CVE-2022-0609",   # chrome rce
        "CVE-2022-3786",   # openssl bug
        #"CVE-2023-24027",
        #"CVE-2023-22903",
        #"CVE-2023-22909",
        #"CVE-2023-24059"    # gta 5 rce
    ]
    for cve in test_cves:
        print(f"Generating exploit code for {cve} using {language}...")
        time.sleep(3)
        
        exploit_instructions = generate_exploit_instructions(cve, language)
        print(exploit_instructions)
        
        exploit_code = generate_exploit_code(exploit_instructions)
        print(exploit_code)