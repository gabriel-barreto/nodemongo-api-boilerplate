import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const deps = require('./package.json').dependencies;
const external = Object.keys(deps);

export default {
  input: 'server.js',
  output: {
    file: 'bin/server.js',
    format: 'cjs',
    name: 'App',
  },
  plugins: [
    resolve({ mainFields: ['module', 'main'], modulesOnly: true }),
    commonjs(),
  ],
  external,
};
