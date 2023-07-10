import { UpdateTicket } from "@/protocols/protocols";
import ticketsRepository from "@/repositories/ticketsRepository";

async function createTicket(eventId: number, userId: number) {
    await ticketsRepository.createTicket(eventId, userId);
}

async function getTicketByUserId(id: number) {
    const ticket = await ticketsRepository.getTicketByUserId(id);
    return ticket;
}

async function getTicketByEventId(id: number) {
    const ticket = await ticketsRepository.getTicketByEventId(id);
    return ticket;
}

async function getTicketById(id: number) {
    const ticket = await ticketsRepository.getTicketById(id);
    return ticket;
}

async function updateTicket(id: number, ticket: UpdateTicket) {
    await ticketsRepository.updateTicket(id, ticket);
}

async function deleteTicket(id: number) {
    await ticketsRepository.deleteTicket(id);
}

async function markUsedTicket(id: number) {
    await ticketsRepository.markUsedTicket(id);
}

const ticketsService = {
    createTicket,
    getTicketByUserId,
    getTicketByEventId,
    getTicketById,
    updateTicket,
    deleteTicket,
    markUsedTicket
}

export default ticketsService;