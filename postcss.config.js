const cssnano = require("cssnano");

const currentTask = process.env.npm_lifecycle_event;

let  postCSSPlugins= [
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-import"),
    require("postcss-hexrgba"),
    require("postcss-mixins"),
    require("postcss-preset-env"),
    require("autoprefixer")
];

if(currentTask === "build"){
  postCSSPlugins.push(cssnano);
}

module.exports = {
  plugins: postCSSPlugins,
};