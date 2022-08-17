import { Injectable } from "@nestjs/common";
import dotenv from "dotenv";
import aws from "aws-sdk";

dotenv.config();

const region = "us-east-1";
const bucketName = "largs-movie-database";
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

@Injectable()
export class S3Service {
  async getSignedUrl(folder: string, filename: string) {
    if (!folder) {
      return {
        error: "folder is required",
      };
    }

    if (!filename) {
      return {
        error: "filename is required",
      };
    }

    const params = {
      Bucket: `${bucketName}/${folder}`,
      Key: filename,
      Expires: 60,
    };
    const uploadURL = await s3.getSignedUrlPromise("putObject", params);

    return {
      signedUrl: uploadURL,
    };
  }
}
