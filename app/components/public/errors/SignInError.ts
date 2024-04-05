import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class SignInError extends AbstractDisplayableError {

    constructor(errorMessage: string) {
        super("Error during sign-in", errorMessage);
    }
}

export default SignInError;