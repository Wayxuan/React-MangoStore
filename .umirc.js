
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history:'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'React-MangoStore',
      dll: false,
    }],
  ],
}

