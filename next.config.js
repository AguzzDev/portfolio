const nextTranslate = require("next-translate")

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  eslint: {
    ignoreDuringBuilds: true,
  },
}
