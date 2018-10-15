export default {
  plugins: [
    ['umi-plugin-react',{
      dva:true,
      antd:true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }]
  ],
  alias: {
    "react-native$": "react-native-web"
  },
};
