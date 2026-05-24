import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:5000/swagger/v1/swagger.json",
    output: {
      target: "./generated/index.ts",
      client: "axios",
      override: {
        mutator: {
          path: "./utils/axios.ts",
          name: "axiosInstance"
        }
      }
    }
  }
});