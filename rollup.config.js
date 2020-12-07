import postcss from 'rollup-plugin-postcss'

export default {
  input: 'index.scss',
  output: [
    {
      file: 'compiled.js',
    },
  ],
  plugins: [
    postcss({
      extract: true,
    })
  ]
}
