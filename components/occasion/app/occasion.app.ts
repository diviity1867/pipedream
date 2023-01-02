import { defineApp } from "@pipedream/types";
import { axios } from "@pipedream/platform";
import { HttpRequestParams } from "../common/types";

export default defineApp({
  type: "app",
  app: "practitest",
  methods: {
    _getAuth(): Record<string, string> {
      return {
        username: this.$auth.api_login,
        password: this.$auth.api_secret,
      };
    },
    _baseUrl() {
      return "https://api.practitest.com/api/v2";
    },
    async _httpRequest({
      $ = this,
      ...args
    }: HttpRequestParams): Promise<object> {
      return axios($, {
        baseURL: this._baseUrl(),
        auth: this._getAuth(),
        ...args,
      });
    },
  },
});
