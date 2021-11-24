const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR",
    defaultNS: ["index"],
    localePath: path.resolve("./public/locales") || path.resolve("./locales"),
  },
};
