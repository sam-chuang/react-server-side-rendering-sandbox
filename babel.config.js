const test = process.env.NODE_ENV === "test"
const prod = process.env.NODE_ENV === "production"

module.exports = {
  presets: [["@babel/preset-env", {}], "@babel/preset-react"],
  plugins: []
}
