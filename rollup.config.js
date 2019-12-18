import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'index.js',
  output: {
    dir: 'dist/',
    format: 'iife',
    entryFileNames: '[name].js'
  },
  plugins: [
    resolve({
      mainFields: ['jsnext:main', 'browser', 'main'],
    }),
    commonjs(), 
  ]
}
