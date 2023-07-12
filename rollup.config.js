import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        typescript(),
        nodeResolve({browser: true}),
        terser(),
        commonjs(),
    ],
};