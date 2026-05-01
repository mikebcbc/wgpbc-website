const path = require("path");
const parse = require("pg-connection-string").parse;

/**
 * Production/staging: set `DATABASE_URL` (Postgres).
 * Local: omit `DATABASE_URL` to use SQLite at `.tmp/data.db` (or `DATABASE_FILENAME`).
 */
module.exports = ({ env }) => {
  const databaseUrl = env("DATABASE_URL");

  if (databaseUrl) {
    const { host, port, database, user, password } = parse(databaseUrl);

    return {
      connection: {
        client: "postgres",
        connection: {
          host,
          port,
          database,
          user,
          password,
          ssl: {
            rejectUnauthorized: false,
          },
        },
        debug: false,
      },
    };
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
