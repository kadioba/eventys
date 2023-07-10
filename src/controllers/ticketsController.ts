import { UpdateTicket } from "@/protocols/protocols";
import ticketsService from "@/services/ticketsService";
import { Request, Response } from "express";

async function createTicket(req: Request, res: Response) {
    // Os tickets são criados com base no id do evento e no id do usuário
    const eventId: number = Number(req.params.eventId);
    const userId: number = Number(req.params.userId);

    await ticketsService.createTicket(eventId, userId);
    res.sendStatus(201);
}

async function getTicketByUserId(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    const ticket = await ticketsService.getTicketByUserId(id);
    res.status(200).send(ticket);
}

async function getTicketByEventId(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    const ticket = await ticketsService.getTicketByEventId(id);
    res.status(200).send(ticket);
}

async function getTicketById(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    const ticket = await ticketsService.getTicketById(id);
    res.status(200).send(ticket);
}

async function updateTicket(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const ticket: UpdateTicket = req.body;

    await ticketsService.updateTicket(id, ticket);
    res.sendStatus(204);
}

async function deleteTicket(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    await ticketsService.deleteTicket(id);
    res.sendStatus(204);
}

async function validateTicket(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    await ticketsService.markUsedTicket(id);
    res.sendStatus(204);
}

const ticketsController = {
    createTicket,
    getTicketByUserId,
    getTicketByEventId,
    getTicketById,
    updateTicket,
    deleteTicket,
    validateTicket
}

export default ticketsController;