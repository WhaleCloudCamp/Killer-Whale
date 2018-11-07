const path = require("path");

export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true,
        antd: true,
        dynamicImport: false,
        title: "whale",
        dll: false,
        hardSource: false,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//
          ]
        }
      }
    ]
  ],
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "use-components-library",
        libraryDirectory: "es",
        style: true
      }
    ]
  ],
  alias: {
    "react-native$": "react-native-web",
    "use-components-library": "antd-mobile",
    components: path.resolve(__dirname, "src/components/index"),
    combinations:path.resolve(__dirname,"src/combination/index.js"),
    utils: path.resolve(__dirname, "src/utils"),
    services: path.resolve(__dirname, "src/services"),
    assets: path.resolve(__dirname, "src/assets"),
    models: path.resolve(__dirname, "src/models")
    // "../style/images/arrow-down.png":"../style/images/arrow-down@3x.png",
    // "../style/images/arrow-up.png":"../style/images/arrow-up@3x.png",
    // "../style/images/arrow.png":"../style/images/arrow@3x.png",
    // "../style/images/check.png":"../style/images/check@3x.png",
    // "../style/images/check_w.png":"../style/images/check_w@3x.png",
    // "../style/images/cross.png":"../style/images/cross@3x.png",
    // "../style/images/cross_w.png":"../style/images/cross_w@3x.png",
    // "../style/images/error.png":"../style/images/error@3x.png",
    // "../style/images/more.png":"../style/images/more@3x.png",
    // "../style/images/more_w.png":"../style/images/more_w@3x.png",
    // "../style/images/search.png":"../style/images/search@3x.png",
    // "./image/checked.png":"./image/checked@3x.png",
    // "./image/checked_disable.png":"./image/checked_disable@3x.png",
    // "./image/normal.png":"./image/normal@3x.png",
    // "./image/normal_disable.png":"./image/normal_disable@3x.png",
    // "./images/fail.png":"./images/fail@3x.png",
    // "./images/offline.png":"./images/offline@3x.png",
    // "./images/success.png":"./images/success@3x.png",
    // "./style/assets/down.png":"./style/assets/down@3x.png",
    // "./style/assets/up.png":"./style/assets/up@3x.png",
    // "react-native/Libraries/StyleSheet/setNormalizedColorAlpha":path.resolve(__dirname, "src/compatibleTools/setNormalizedColorAlpha")
  },
  extraBabelIncludes: [/whale-rn/, /react-native/],
  proxy: {
    "/api/": {
      target: "http://localhost:3000/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
};
