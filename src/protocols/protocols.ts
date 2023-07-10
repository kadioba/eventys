import { Customer, Event, Ticket } from "@prisma/client";
import exp from "constants";

export type CreateCustomer = Omit<Customer, 'id'>;

export type UpdateCustomer = Partial<CreateCustomer>;

export type CreateEvent = Omit<Event, "id">;

export type UpdateEvent = Partial<CreateEvent>;

export type UpdateTicket = Partial<Ticket>;

export type ApplicationError = {
    name: string;
    message: string;
};