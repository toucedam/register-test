# register-test

Cypress challenge-Implement automation test  sign up  <br />

To run the tests with cypress<br />
Do npm install <br />
to run the test openning cypress use npx cypress open <br />
to run the test phantom use npx cypress run <br />

To run the test with Docker <br />
execute from console image included on cypress <br />
-> docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:6.2.1 <br />
or use the Docker image included on repo, doing: <br />
docker build -t cypress-test-image:1.0.0 . to build Docker image <br />
docker run -t cypress-test-image:1.0.0 . o run the tests with Image created <br />

