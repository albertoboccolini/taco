import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class InvalidPassword extends AbstractDisplayableError {

    constructor() {
        super("Errore durante l'accesso", "Controlla la password e riprovare.");
    }
}

export default InvalidPassword;