import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class ConversionError extends AbstractDisplayableError {

    constructor(message: string) {
        super("Errore durante la conversione", message);
    }
}

export default ConversionError;