const test = process.env.NODE_ENV === "test"
const prod = process.env.NODE_ENV === "production"

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [["snowpack/assets/babel-plugin.js", { dir: "modules" }]]
}
