export interface SignInResponseDTO {
    readonly success: boolean;
    readonly message: string;
    readonly apiKey: string;
    readonly error: string;
}

export default SignInResponseDTO;