import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class ConversionError extends AbstractDisplayableError {

    constructor(message: string) {
        super("Error during conversion", message);
    }
}

export default ConversionError;