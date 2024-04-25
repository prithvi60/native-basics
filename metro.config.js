const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.sourceExts.push("svg");
config.resolver.sourceExts.push("mjs");

config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => !config.resolver.sourceExts.includes(ext)
);

// config.transformer.babelTransformerPath = require.resolve(
//   "./metro.config.js"
// );

module.exports = config;
