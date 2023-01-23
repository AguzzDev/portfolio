const nextTranslate = require("next-translate")

const config = {
  reactStrictMode: true,
  ...nextTranslate(),
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = config
