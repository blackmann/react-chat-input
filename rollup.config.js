import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import { visualizer } from 'rollup-plugin-visualizer'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  external: ['react', 'react-dom'],
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    postcss({ extract: 'styles/index.css', modules: true }),
    typescript(),
    visualizer({ filename: 'build/stats.html' }),
  ],
}

export default config
