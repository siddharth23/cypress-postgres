# Cypress POSTGRES

Test sql query to your postgres database in cypres tests

Use this plugin to query postgres database and use response in cypress tests

# Installation

```bash
npm i -D cypress-postgres

then open your `cypress/plugins/index.js` file and register a new task

```javascript
module.exports = on => {
  on("task", {
    dbQuery: require("cypress-postgres")
  });
};
```

# How to use it

To query postgres database follow below steps-

* Add postgres database connection details in cypress.env.json file. Details are like-
{"dbUser": "postgres",
"dbHost": "localhost",
"database": "postgres",
"dbPassword": "*****",
"dbPort":5432
}

```javascript
cy.task("dbQuery", "your sql query").then(queryResponse => {
  expect(queryResponse).to.equal("[x:y]")
});
```

## Contributors


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://www.linkedin.com/in/siddharth-kala-575ba6175/"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFSKgEAqprkcA/profile-displayphoto-shrink_400_400/0?e=1602115200&amp;v=beta&amp;t=dXeAXbqHe7MyENd7o8zdH_bbAFdffnAdVx3rsQkygjg" width="100px;" alt="Siddharth Kala"/><br /><sub><b>Siddharth Kala</b></sub></a><br /><a href="https://github.com/siddharth23/cypress-postgres.git" title="Code">💻</a> <a href="https://github.com/siddharth23/cypress-postgres.git" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
