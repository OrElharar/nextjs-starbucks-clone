export class DdCommand{
    query: string;
    values: unknown[];

    constructor({query, values}: {query: string, values: unknown[]}) {
        this.query = query;
        this.values = values;
    }
}
