export interface GetUserResponseDTO {
    readonly success: boolean;
    readonly data: {
        readonly name: string;
        readonly surname: string;
        readonly email: string;
        readonly api_key: string;
    };
}

export default GetUserResponseDTO;