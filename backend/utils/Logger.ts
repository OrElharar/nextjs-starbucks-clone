export class Logger{
    owner: string;

    constructor(owner: string) {
        this.owner = owner;
    }

    debug(message: string): void{
        console.log(`${this.owner} - DEBUG - ${message}`)
    }

    info(message: string): void{
        console.log(`${this.owner} - INFO - ${message}`)
    }

    error(message: string | undefined): void{
        message = typeof message === "string" ? message : "Unknown error";
        console.log(`${this.owner} - ERROR - ${message}`)
    }

    warn(message: string): void{
        console.log(`${this.owner} - WARN - ${message}`)
    }
}


const logger = new Logger("Starbucks-API")
export default logger;
