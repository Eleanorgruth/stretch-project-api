// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: 5432,
      database: 'stretch_project',
      user: 'postgres',
      password: 'erdwa20'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.STRETCH_TECH_DB,
      ssl: {
       rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },
};
