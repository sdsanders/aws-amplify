import * as S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk/global';
import * as Cognito from 'amazon-cognito-identity-js';
import * as Pinpoint from 'aws-sdk/clients/pinpoint';
import * as Kinesis from 'aws-sdk/clients/kinesis';
import * as MobileAnalytics from 'aws-sdk/clients/mobileanalytics';
import * as CognitoHostedUI from 'amazon-cognito-auth-js';
import * as LexRuntime from 'aws-sdk/clients/lexruntime';
export { AWS, S3, Cognito, Pinpoint, MobileAnalytics, Kinesis, CognitoHostedUI, LexRuntime };
