export class Tickets {
    id: number;
    price: number;
    eventId: number;
    userId : number;
    date: Date;
    validated: boolean;
    description?: string|undefined;
}