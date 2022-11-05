import axios from "axios";
import { baseUrls } from "../config/baseUrlConfig";
import { apiEndpoints } from "../config/apiEndpointConfig";
import { toast } from "react-toastify";

// This is how we can handle errors for all our server calls in one place
// axios interceptors allow us to intercept requests and responses and do stuff with them
// axios.interceptors has two properties: response and request
//    1. response - use when you want to intercept all responses coming back from the server
//    2. request - use when you want to intercept all requests befor they go to the server
// The use() method takes 2 functions as params:
//    1. First param is a function that will be called ON SUCCESS of the response/request
//    2. Second param is a function that will be called ON FAILURE of the response/request

// Here we set the first param to null because we don't care about successful responses
// Then the second param is set to a function that will handle our unexpected errors
// To pass control to our catch block (for handling the unexpected errors), we need to return a REJECTED PROMISE
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occured.");
  }
  return Promise.reject(error);
});

let devBaseUrl = baseUrls.devBaseUrl;
let prodBaseUrl = baseUrls.prodBaseUrl;

export function getDevApiEndpoints() {
  // Clone the apiEndpoints object into devApiEndpoints object
  let devApiEndpoints = { ...apiEndpoints };

  // For each endpoint in the object..
  // Set the value of that endpoint in the object to the devUrl + the apiEndpoint
  for (let p in devApiEndpoints) {
    devApiEndpoints[p] = devBaseUrl + devApiEndpoints[p];
  }

  // Return an object that has the fully qualified API endpoint paths for Dev
  return devApiEndpoints;
}

export function getProdApiEndpoints() {
  // Clone the apiEndpoints object into prodApiEndpoints object
  let prodApiEndpoints = { ...apiEndpoints };

  // For each endpoint in the object..
  // Set the value of that endpoint in the object to the devUrl + the apiEndpoint
  for (let p in prodApiEndpoints) {
    prodApiEndpoints[p] = prodBaseUrl + prodApiEndpoints[p];
  }

  // Return an object that has the fully qualified API endpoint paths for Dev
  return prodApiEndpoints;
}

// Here we are exporting a default object
// That means we can import it in another module and name it whatever we want
// Now, if we were to use another library, we would just change it here
export let http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
