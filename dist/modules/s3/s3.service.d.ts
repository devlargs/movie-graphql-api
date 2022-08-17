export declare class S3Service {
    getSignedUrl(folder: string, filename: string): Promise<{
        error: string;
        signedUrl?: undefined;
    } | {
        signedUrl: string;
        error?: undefined;
    }>;
}
