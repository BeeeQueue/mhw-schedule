import antfu from "@antfu/eslint-config"

export default antfu({
  ignores: ["tsconfig.json"],
  stylistic: false,
  test: { overrides: { "test/no-import-node-test": "off" } },
  svelte: {
    overrides: {
      "no-use-before-define": "off",
    },
  },
  typescript: {
    tsconfigPath: "tsconfig.json",
    overrides: {
      "no-console": "off",
      "ts/no-use-before-define": "off",
      "ts/consistent-type-definitions": "off",
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "jsonc/sort-keys": "off",
    },
  },
})
