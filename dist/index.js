"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// lib/aws-cdk-boostrapless-credential-provider-source.ts
var AWS, AwsCdkBootstraplessCredentialProviderSource;
var init_aws_cdk_boostrapless_credential_provider_source = __esm({
  "lib/aws-cdk-boostrapless-credential-provider-source.ts"() {
    init_cjs_shims();
    AWS = require("aws-sdk");
    AwsCdkBootstraplessCredentialProviderSource = class {
      constructor() {
        console.debug("AwsCdkBootstraplessCredentialProviderSource.constructor()");
        this.name = "AwsCdkBootstraplessCredentialProviderSource";
      }
      async isAvailable() {
        console.debug("AwsCdkBootstraplessCredentialProviderSource.isAvailable()");
        return true;
      }
      async canProvideCredentials(accountId) {
        console.debug(`AwsCdkBootstraplessCredentialProviderSource.canProvideCredentials(${accountId})`);
        return true;
      }
      async getProvider(accountId, mode) {
        console.debug(`AwsCdkBootstraplessCredentialProviderSource.getProvider(${accountId}, ${mode})`);
        return new AWS.SharedIniFileCredentials({ profile: accountId });
      }
    };
  }
});

// lib/aws-cdk-boostrapless-credential-provider-plugin.ts
var aws_cdk_boostrapless_credential_provider_plugin_exports = {};
__export(aws_cdk_boostrapless_credential_provider_plugin_exports, {
  AwsCdkBootstraplessCredentialProviderPlugin: () => AwsCdkBootstraplessCredentialProviderPlugin
});
var AwsCdkBootstraplessCredentialProviderPlugin;
var init_aws_cdk_boostrapless_credential_provider_plugin = __esm({
  "lib/aws-cdk-boostrapless-credential-provider-plugin.ts"() {
    init_cjs_shims();
    init_aws_cdk_boostrapless_credential_provider_source();
    AwsCdkBootstraplessCredentialProviderPlugin = class {
      constructor() {
        this.version = "1";
      }
      init(host) {
        host.registerCredentialProviderSource(new AwsCdkBootstraplessCredentialProviderSource());
      }
    };
  }
});

// lib/index.js
init_cjs_shims();
var aws_cdk_boostrapless_credential_provider_plugin_1 = (init_aws_cdk_boostrapless_credential_provider_plugin(), __toCommonJS(aws_cdk_boostrapless_credential_provider_plugin_exports));
module.exports = new aws_cdk_boostrapless_credential_provider_plugin_1.AwsCdkBootstraplessCredentialProviderPlugin();
