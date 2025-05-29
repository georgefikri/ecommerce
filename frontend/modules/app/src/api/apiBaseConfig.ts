// export const API_BASE_URL = 'http://localhost:8082/api/v1';

// // DO THIS if you're running the frontend inside Docker
// export const API_BASE_URL = 'http://playground-api-mocks:8082/api/v1';

const isBrowser = typeof window !== 'undefined';

// export const API_BASE_URL = isBrowser
//   ? 'http://localhost:8082/api/v1' // used in client (browser)
//   : 'http://playground-api-mocks:8082/api/v1'; // used in server (Docker)

export const API_BASE_URL = isBrowser
  ? 'http://localhost:8082' // for browser
  : 'http://playground-api-mocks:8082'; // for server
