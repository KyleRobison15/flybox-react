import { http, getDevApiEndpoints, getProdApiEndpoints } from "./httpService";

const api = getDevApiEndpoints();
// const api = getProdApiEndpoints(); // Change to this when using prod URL

export function registerUser(user) {
  return http.post(api.register, user);
}

export function getUserByUsername(username, httpOptions) {
  return http.get(`${api.users}/${username}`, { headers: httpOptions });
}
