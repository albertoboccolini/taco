import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class Base64ConvertError extends AbstractDisplayableError {

    constructor() {
        super("Errore di conversione", "Controllare il file e riprovare.");
    }
}

export default Base64ConvertError;