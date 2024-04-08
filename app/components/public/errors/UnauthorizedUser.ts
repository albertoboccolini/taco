import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class UnauthorizedUser extends AbstractDisplayableError {

    constructor() {
        super("Unauthorized User", "Please log-in to perform this action.");
    }
}

export default UnauthorizedUser;