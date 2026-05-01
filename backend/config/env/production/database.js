const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL must be set when NODE_ENV=production (Postgres required)."
    );
  }

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
};
