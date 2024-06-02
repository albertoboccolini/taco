import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class AuthenticationError extends AbstractDisplayableError {
  constructor(errorMessage: string) {
    super("Authentication error", errorMessage);
  }
}

export default AuthenticationError;
