const path = require("path");

module.exports = ({ config }) => {
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
    require.resolve("@emotion/babel-preset-css-prop")
  ];
  // ... other configs

  // Add Webpack rules for TypeScript
  // ========================================================
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [
        ["react-app", { flow: false, typescript: true }],
        require.resolve("@emotion/babel-preset-css-prop")
      ]
      // ... other configs
    }
  });
  // ... other configs

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};