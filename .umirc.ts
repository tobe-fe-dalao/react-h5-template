import postcssPx2ViewPort from 'postcss-px-to-viewport';
import { defineConfig } from 'umi';
import routes from './src/router'

export default defineConfig({
  extraPostCSSPlugins: [
    postcssPx2ViewPort({
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      unitPrecision: 6, // 转换后的精度，即小数点位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
    }),
  ],
  chainWebpack: (config, { webpack }) => {
    config.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false)
  },
  routes,
  mfsu: {},
  webpack5:{}
});
