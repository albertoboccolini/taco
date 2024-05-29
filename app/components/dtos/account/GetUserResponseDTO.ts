export interface GetUserResponseDTO {
    readonly success: boolean;
    readonly data: {
        readonly name: string;
        readonly surname: string;
        readonly email: string;
        readonly apiKey: string;
        readonly password: string;
    };
}

export default GetUserResponseDTO;