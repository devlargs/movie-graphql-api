import { S3Service } from "./s3.service";
export declare class S3Controller {
    private readonly s3Service;
    constructor(s3Service: S3Service);
    getSignedUrl(query: {
        folder: string;
        filename: string;
    }): Promise<{
        error: string;
        signedUrl?: undefined;
    } | {
        signedUrl: string;
        error?: undefined;
    }>;
    get(): string;
}
