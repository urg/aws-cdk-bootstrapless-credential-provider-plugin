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
        const {
            AWS_ACCESS_KEY_ID,
            AWS_SECRET_ACCESS_KEY,
            AWS_SESSION_TOKEN,
            AWS_SHARED_CREDENTIALS_FILE,
        } = process.env

          if (AWS_SHARED_CREDENTIALS_FILE) {
            return new AWS.SharedIniFileCredentials({ profile: accountId });
          }

          return new AWS.Credentials({
            accessKeyId: AWS_ACCESS_KEY_ID!,
            secretAccessKey: AWS_SECRET_ACCESS_KEY!,
            sessionToken: AWS_SESSION_TOKEN,
          })
        }
}
