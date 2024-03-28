export interface GetFileResponseDTO {
    readonly success: boolean
    readonly fileData: {
        readonly file_name: string;
        readonly url: string;
    };
}

export default GetFileResponseDTO;