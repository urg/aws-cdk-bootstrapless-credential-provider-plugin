import * as cdk from "aws-cdk";
import { AwsCdkBootstraplessCredentialProviderSource } from "./aws-cdk-boostrapless-credential-provider-source";


export class AwsCdkBootstraplessCredentialProviderPlugin implements cdk.Plugin {
    public readonly version = "1";

    public init(host: cdk.PluginHost): void {
        host.registerCredentialProviderSource(new AwsCdkBootstraplessCredentialProviderSource());
    }
}