# Summary
This is backend for the application. This application talk to Yelp Api to retrieve the data. The frontend call this app to request for Yelp data. The communication between the frontend and backend is authenticated using AuthO.

## Projects
### Backend
This is the backend project. It is written in NodeJS. It uses ExpressJS as the web framework. It uses AuthO for authentication. It uses Yelp Api to retrieve the data. It uses MongoDB to store the data. It uses Mongoose as the ORM. It uses Jest as the test framework. [TODO] ~~It uses Supertest as the test library. It uses Nock as the mock library. It uses Winston as the logging library. It uses Morgan as the request logging library. It uses Express-JWT as the authentication library. It uses dotenv as the environment variable library. It uses cors as the cors library. It uses helmet as the security library. It uses compression as the compression library. It uses express-rate-limit as the rate limiting library. It uses express-mongo-sanitize as the mongo sanitize library. It uses express-xss-clean as the xss clean library. It uses hpp as the http parameter pollution library. It uses express-validator as the validation library. It uses nodemon as the development server. It uses eslint as the linting library. It uses prettier as the code formatter. It uses husky as the git hook library. It uses lint-staged as the linting library. It uses concurrently as the library to run multiple commands concurrently. It uses cross-env as the library to set environment variables. It uses rimraf as the library to remove files and folders. It uses win-node-env as the library to set environment variables in Windows. It uses supertest-mongoose as the library to test mongoose. It uses supertest-session as the library to test session. It uses supertest-session as the library to test session.~~
The docker file is available in the root folder. The docker file creates a simple node 14 image. The docker file copies the backend project to the image. The docker file installs the dependencies. The docker file exposes port 8080. The docker file runs the backend project.

### Frontend
This is the frontend project. It is written in ReactJS. It uses React Router as the routing library. It uses AuthO for authentication. It uses styled component as the UI library. It uses Jest as the test framework. [TODO] ~~It uses Supertest as the test library. It uses Nock as the mock library. It uses Winston as the logging library. It uses Morgan as the request logging library. It uses Express-JWT as the authentication library. It uses dotenv as the environment variable library. It uses cors as the cors library. It uses helmet as the security library. It uses compression as the compression library. It uses express-rate-limit as the rate limiting library. It uses express-mongo-sanitize as the mongo sanitize library. It uses express-xss-clean as the xss clean library. It uses hpp as the http parameter pollution library. It uses express-validator as the validation library. It uses nodemon as the development server. It uses eslint as the linting library. It uses prettier as the code formatter. It uses husky as the git hook library. It uses lint-staged as the linting library. It uses concurrently as the library to run multiple commands concurrently. It uses cross-env as the library to set environment variables. It uses rimraf as the library to remove files and folders. It uses win-node-env as the library to set environment variables in Windows. It uses supertest-mongoose as the library to test mongoose. It uses supertest-session as the library to test session. It uses supertest-session as the library to test session.~~
The docker file is available in the root folder. The docker file creates a simple node 14 image. The docker file copies the frontend project to the image. The docker file installs the dependencies. The docker file exposes port 3000. The docker file runs the frontend project.

## Docker compose
The docker compose file is available in the root folder. The docker compose file creates a network. The docker compose file creates a mongodb container. The docker compose file creates a backend container. The docker compose file creates a frontend container. The docker compose file exposes port 3000. The docker compose file exposes port 8080. The docker compose file exposes port 27017.

## Development
### Authentication
AuthO assymetric authentication is used. The auth bearer token is included in the header in every request from frontend to backend. `express-jwt` library is used to verify the authentication token. To verify the token, following environment variables must be available in **backend**.
* AUTH0_ISSUER_BASE_URL: this is the base url of the AuthO tenant. Example: https://dev-xxxxxx.us.auth0.com
* AUTH0_AUDIENCE: this is the audience of the AuthO tenant. Example: https://dev-xxxxxx.us.auth0.com/api/v2/
* AUTH0_DOMAIN: this is the domain of the AuthO tenant. Example: dev-xxxxxx.us.auth0.com

The **frontend** must be configured to use the same AuthO tenant. The frontend must be configured to use the same audience as the backend. The frontend must be configured to use the same domain as the backend.
* REACT_APP_AUTH0_DOMAIN: this is the domain of the AuthO tenant. Example: dev-xxxxxx.us.auth0.com
* REACT_APP_AUTH0_AUDIENCE: this is the audience of the AuthO tenant. Example: https://dev-xxxxxx.us.auth0.com/api/v2/
* REACT_APP_CLIENT_ID: this is the client id of the AuthO tenant. Example: 1234567890

### Yelp Api
Yelp Api is used to retrieve the data. To use Yelp Api, following environment variables must be available in **backend**
* YELP_API_KEY: this is the api key of the Yelp Api. Example: 1234567890
