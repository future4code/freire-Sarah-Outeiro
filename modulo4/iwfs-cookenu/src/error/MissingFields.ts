import { BaseError } from "./BaseError"

export class MissingFields extends BaseError {
    constructor() {
        super('está faltando parametros', 404)
    }
}