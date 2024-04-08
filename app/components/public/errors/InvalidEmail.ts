import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class InvalidEmail extends AbstractDisplayableError {

    constructor() {
        super("Invalid E-Mail", "Please check and retry.");
    }
}

export default InvalidEmail;