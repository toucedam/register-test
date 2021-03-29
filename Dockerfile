FROM cypress/included:3.2.0
WORKDIR  /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
RUN npx cypress run

