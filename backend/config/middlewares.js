module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "wintergardenpbc.squarespace.com",
            "static1.1.sqspcdn.com",
            "*.1.sqspcdn.com",
            "*.*.sqspcdn.com",
            "*.digitaloceanspaces.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "wintergardenpbc.squarespace.com",
            "static1.1.sqspcdn.com",
            "*.1.sqspcdn.com",
            "*.*.sqspcdn.com",
            "*.digitaloceanspaces.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      jsonLimit: "10mb",
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
