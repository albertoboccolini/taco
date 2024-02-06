export class AbstractDisplayableError implements Error {


    message: string;
    name: string;

    constructor(title: string, description: string) {
        this.name = title;
        this.message = description;
    }
}

export default AbstractDisplayableError;