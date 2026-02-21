import { HTTP } from "./http";

import type { ApiConfig, User } from "../types";
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  static $inject = ["config", "http"];

  constructor(config: ApiConfig, http: HTTP) {
    this.http = http;
    this.apiConfig = config;
  }
  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
