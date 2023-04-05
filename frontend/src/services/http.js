import axios from "axios";
import { language } from "@/common/language.js";

/**
 * req is used for sending HTTP requests, mainly to Sugar Security API
 * @param {string} uri Endpoint being accessed
 * @param {string} method POST, GET, etc...
 * @param {*} body Body of request
 * @param {string || null} baseUrl Sugar Security API will be used as default but any non-null value for baseUrl overrides this
 * @returns 
 */
export const req = async (method, uri, data = null) => {
  //const tokenSet = get(language.en.services.cache.tokenSet);
  //const userprofile = get(language.en.services.cache.userprofile);
  let idToken;

  //if (tokenSet) {
  //  idToken = tokenSet.id_token || tokenSet.idToken;
  //}

  if (uri[0] !== '/') {
    uri = '/' + uri;
  }

  // let url = (baseUrl ?? import.meta.env.VITE_api_base_url) + uri;
  // let url = "http://localhost:8080/function" + uri

  const headers = {
    'Content-Type': 'application/json'
  }

  if (idToken) {
    headers['Authorization'] = `Bearer ${idToken}`
  }

  //headers['CustomerID'] = $cookies.get('userprofile').customerId
  let response;

  try {
    response = await axios({
      method,
      url: uri,
      headers,
      data: data,
      withCredentials: true,
    })
    
  } catch (error) {
    // console.error(error);
    throw error;
  }

  return response;
}
