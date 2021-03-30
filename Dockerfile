FROM cypress/included:6.8.0
WORKDIR  /app
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
RUN npx cypress run 

