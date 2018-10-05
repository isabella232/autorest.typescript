import nodeResolve from "rollup-plugin-node-resolve";
/**
 * @type {import('rollup').RollupFileOptions}
 */
const config = {
  input: './esm/autoRestParameterizedCustomHostTestClient.js',
  external: ["ms-rest-js", "ms-rest-azure-js"],
  output: {
    file: "./dist/multiapi-test-2018-02-01.js",
    format: "umd",
    name: "Azure.MultiapiTest20180201",
    sourcemap: true,
    globals: {
      "ms-rest-js": "msRest",
      "ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */`
  },
  plugins: [
    nodeResolve({ module: true })
  ]
};
export default config;
