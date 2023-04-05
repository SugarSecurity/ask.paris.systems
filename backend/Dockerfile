ARG FUNCTION_DIR="/function"

FROM python:3.9

# copies 'src' folder into Lambda "/function" working dir
ARG FUNCTION_DIR
COPY . ${FUNCTION_DIR}
WORKDIR ${FUNCTION_DIR}

# Update & Install Lambda dependencies
RUN apt-get update && apt-get install -y\
    g++ \
    make \
    wget \
    cmake \
    unzip \
    curl \
    libcurl4-openssl-dev

# Python & Dependencies
RUN apt-get install -y python3 python3-pip \
    && pip install poetry\
    && poetry config virtualenvs.create false \
    && poetry install \
    && pip install --upgrade openai \
    # Install and Prep the AWS Lambda Runtime Interface Client
    && wget -O ./aws-lambda-rie https://github.com/aws/aws-lambda-runtime-interface-emulator/releases/latest/download/aws-lambda-rie

# Install and Prep the AWS Lambda Runtime Interface Client
RUN wget -O ./aws-lambda-rie https://github.com/aws/aws-lambda-runtime-interface-emulator/releases/latest/download/aws-lambda-rie \
    && chmod u+x ./aws-lambda-rie \
    && chmod u+x ./lambda.sh

ENTRYPOINT [ "./lambda.sh" ]
