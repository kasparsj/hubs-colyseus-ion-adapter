const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "hubs-colyseus-ion-adapter.min.js"
    },
    devtool: "source-map"
});
