import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
    },
    ...pluginJs.configs.recommended, 
    env: {
      node: true, 
    },
  },
];
