import { Controller, Get, Query } from "@nestjs/common";

import { S3Service } from "./s3.service";

@Controller("s3")
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Get("/url")
  getSignedUrl(@Query() query: { folder: string; filename: string }) {
    return this.s3Service.getSignedUrl(query.folder, query.filename);
  }

  @Get("/")
  get() {
    return "welcome to s3 uploader";
  }
}
