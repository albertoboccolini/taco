import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class InvalidParameter extends AbstractDisplayableError {

    constructor(parameterName: String) {
        super("Parametri non validi", parameterName + " mancante.");
    }
}

export default InvalidParameter;