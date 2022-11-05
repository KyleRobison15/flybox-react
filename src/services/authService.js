import { http, getDevApiEndpoints, getProdApiEndpoints } from "./httpService";

const api = getDevApiEndpoints();
// const api = getProdApiEndpoints(); // Change to this when using prod URL

const localStorageKeys = {
  loggedInUsername: "loggedInUsername",
  credentials: "credentials",
  role: "role",
};

export async function login(username, password) {
  const credentials = generateCredentials(username, password);
  const httpOptions = {
    Authorization: "Basic " + credentials,
  };

  const { data: user } = await http.get(api.authenticate, {
    headers: httpOptions,
  });

  localStorage.setItem(localStorageKeys.loggedInUsername, user.username);
  localStorage.setItem(localStorageKeys.credentials, credentials); // Upgrade to JWT
  localStorage.setItem(localStorageKeys.role, user.roles[0]);
}

export function logout() {
  localStorage.removeItem(localStorageKeys.loggedInUsername);
  localStorage.removeItem(localStorageKeys.credentials);
  localStorage.removeItem(localStorageKeys.role);
}

export async function register(newUser) {
  const response = await http.post(api.register, newUser);

  localStorage.setItem(
    localStorageKeys.loggedInUsername,
    response.data.username
  );
  localStorage.setItem(localStorageKeys.role, response.data.roles[0]);

  const credentials = generateCredentials(
    response.data.username,
    newUser.password
  );

  localStorage.setItem(localStorageKeys.credentials, credentials);
}

export async function getCurrentUser() {
  try {
    const loggedInUsername = getLoggedInUsername();
    const credentials = getCredentials();

    if (loggedInUsername && credentials) {
      const httpOptions = {
        Authorization: "Basic " + credentials,
      };

      const { data: user } = await http.get(
        `${api.users}/${loggedInUsername}`,
        { headers: httpOptions }
      );

      return user;
    }
  } catch (error) {
    return null;
  }
}

export function generateCredentials(username, password) {
  return btoa(username + ":" + password);
}

export function getCredentials() {
  return localStorage.getItem(localStorageKeys.credentials);
}

export function getLoggedInUsername() {
  return localStorage.getItem(localStorageKeys.loggedInUsername);
}

export function getRole() {
  return localStorage.getItem(localStorageKeys.role);
}
