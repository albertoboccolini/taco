export interface GetPasswordResponseDTO {
  readonly success: boolean;
  readonly data: [
    {
      readonly website: string;
      readonly username: string;
      readonly password: string;
    },
  ];
}

export default GetPasswordResponseDTO;
