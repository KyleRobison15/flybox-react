import { http, getDevApiEndpoints, getProdApiEndpoints } from "./httpService";
import * as authService from "../services/authService";

const api = getDevApiEndpoints();
// const api = getProdApiEndpoints(); // Change to this when using prod URL

const localStorageKeys = authService.getLocalStorageKeys();

export async function getUserFlybox() {
  return null;
}

export async function getFlyFromFlybox(flyName) {
  const httpOptions = authService.generateAuthorizationHeader();

  return await http.get(`${api.flybox}/${flyName}`, httpOptions);
}

export function deleteFlyFromFlybox() {
  return null;
}

export function updateFlyInFlybox() {
  return null;
}

export function addFlyToFlybox() {
  return null;
}
