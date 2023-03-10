const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-sass-postcss",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      },
    },
  ],
  plugins: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple'),
  ],
  staticDirs: ['../public'],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}