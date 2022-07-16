import babel from '@rollup/plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
const packageJson = require("./package.json");

const config = {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        babel({
            babelHelpers: "runtime",
            exclude: "**/node_modules/**",
            extensions: [".js", ".jsx"],
        }),
        postcss()
    ]
};

export default config;