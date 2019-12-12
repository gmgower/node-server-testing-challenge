#Install dep
npm i supertest jest -D

Config jest to run in node mode
// add to package.json
  "jest": {
    "testEnvironment": "node"
  }

//? cmd ot run test
  npm run test 