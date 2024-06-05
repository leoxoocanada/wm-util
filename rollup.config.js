import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/main.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    // babel({
    //   exclude: 'node_modules/**', // 为了避免转译第三方脚本,我们需要设置一个
    // }),
    // resolve({
    //   jsnext: true, // jsnext 表示将原来的 node模块转化成 ES6模块, main和 browser
    //   main: true, // 则决定了要将第三方模块内的哪些代码打包到最终文件中。
    //   browser: true,
    // }),
    // uglify(),
  ],
}
