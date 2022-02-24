import * as cdk from "aws-cdk/lib";
import AWS = require("aws-sdk");


export class AwsCdkBootstraplessCredentialProviderSource implements cdk.CredentialProviderSource {
    name: string;

    constructor() {
        console.debug("AwsCdkBootstraplessCredentialProviderSource.constructor()");
        this.name = "AwsCdkBootstraplessCredentialProviderSource";
    }

    public async isAvailable(): Promise<boolean> {
        console.debug("AwsCdkBootstraplessCredentialProviderSource.isAvailable()");
        return true;
    }

    public async canProvideCredentials(accountId: string): Promise<boolean> {
        console.debug(`AwsCdkBootstraplessCredentialProviderSource.canProvideCredentials(${accountId})`);
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async getProvider(accountId: string, mode: cdk.Mode): Promise<AWS.Credentials> {
        console.debug(`AwsCdkBootstraplessCredentialProviderSource.getProvider(${accountId}, ${mode})`);
        return new AWS.SharedIniFileCredentials({ profile: accountId });
    }
}
