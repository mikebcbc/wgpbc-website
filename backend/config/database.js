// const path = require("path");

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });

const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
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
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "strapi"),
//       user: env("DATABASE_USERNAME", "strapi"),
//       password: env("DATABASE_PASSWORD", "strapi"),
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });
