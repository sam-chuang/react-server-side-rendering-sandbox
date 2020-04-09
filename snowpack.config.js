const test = process.env.NODE_ENV === "test"
const production = process.env.NODE_ENV === "production"

module.exports = {
  webDependencies: ["react", "react-dom", "react-router-dom"],
  installOptions: {
    dest: "modules",
    clean: production,
    optimize: production,
    strict: true,
    sourceMap: true,
  },
  namedExports: {},
  dedupe: [],
  source: "pika",
  rollup: {
    plugins: [],
  },
}
