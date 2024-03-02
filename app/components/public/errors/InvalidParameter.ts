import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class InvalidParameter extends AbstractDisplayableError {

    constructor(parameterName: String) {
        super("Invalid parameters", parameterName + " is missing.");
    }
}

export default InvalidParameter;