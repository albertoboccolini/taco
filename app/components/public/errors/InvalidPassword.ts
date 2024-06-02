import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class InvalidPassword extends AbstractDisplayableError {
  constructor() {
    super("Error logging in", "Please check your password and try again.");
  }
}

export default InvalidPassword;
