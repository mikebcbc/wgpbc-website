/**
 * gatsby-source-strapi (v5.x) still performs an incremental fetch when its cached
 * `timestamp` exists (`filters[updatedAt][$gt]=…`). That often 403s behind CDNs or
 * strict API tokens. Clearing the timestamp forces a full fetch each build.
 *
 * Opt in to incremental again with GATSBY_STRAPI_ALLOW_DELTA=true.
 */
exports.onPreBootstrap = async ({ getCache }) => {
    if (process.env.GATSBY_STRAPI_ALLOW_DELTA === "true") {
        return;
    }
    const strapiCache = getCache("gatsby-source-strapi");
    await strapiCache.set("timestamp", null);
};
