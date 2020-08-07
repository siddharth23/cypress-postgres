// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const pgp = require('pg-promise')();
module.exports = (on, config) => {
  const connection = {
    user: config.env.dbUser,
    host: config.env.dbHost,
    database: config.env.database,
    password: config.env.dbPassword,
    port:config.env.dbPort
  }

  const db = pgp(connection);
  on("task", {
    dbQuery: function(query)  {
      return db.any(query)
    },
  });
}

