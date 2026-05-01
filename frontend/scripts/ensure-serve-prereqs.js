const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const publicIndex = path.join(root, "public", "index.html");
const matchPaths = path.join(root, ".cache", "match-paths.json");

if (!fs.existsSync(publicIndex)) {
    console.error(
        "No production build found (missing public/index.html).\n" +
            "Run `yarn build` in the frontend directory, then `yarn serve`."
    );
    process.exit(1);
}

if (!fs.existsSync(matchPaths)) {
    console.error(
        "Gatsby build cache is missing (.cache/match-paths.json).\n" +
            "`gatsby serve` needs a recent `yarn build` (it uses .cache for routing, not only public/).\n" +
            "Run `yarn build`, then `yarn serve`."
    );
    process.exit(1);
}
