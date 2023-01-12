import json from 'rollup-plugin-json';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import clear from 'rollup-plugin-clear';
import { uglify } from "rollup-plugin-uglify";

let plugins = [
  clear({
    targets: ['dist']
  }),
  nodeResolve(),
  json(),
  cleanup(),
  babel({
    presets: ['@babel/preset-env'],
    babelHelpers : 'bundled'
  })
];

if (process.env.mode === "production") {
  plugins.push(uglify())
}

export default {
  input: "src/index.js",
  output: [
    {
      file: 'dist/index.js',
      name: "ctUtils",
      format: "umd"
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ],
  plugins
}
