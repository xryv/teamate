import aws from 'aws-sdk';

const region = 'Europe (Paris) eu-west-3';
const bucketName = 'teamate-bucket';
const accessKeyId = 'my-access key';
const secretAccessKey = 'my-secret  key';

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
});