import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export class CloudConvertConversionError extends AbstractDisplayableError {

    constructor(errorCode: int) {

        switch (errorCode) {
            case 404:
                super("Errore durante la conversione", "Risorsa non trovata.");
                break;
            case 401:
                super("Errore durante la conversione", "Credenziali errate. Si prega di controllare l'API Key di CloudConvert.");
                break;
            case 402:
                super("Errore durante la conversione", "Conversioni Terminate.");
                break;
            default:
                super("Errore durante la conversione", `Errore generico ${errorCode}.`);
                break;
        }
    }
}

export default CloudConvertConversionError;