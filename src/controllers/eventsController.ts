import { CreateEvent, UpdateEvent } from "@/protocols/protocols";
import eventsService from "@/services/eventsService";
import { Request, Response } from "express";

async function getEvents(req: Request, res: Response) {
    const events = await eventsService.getEvents();
    res.send(events);
}

async function getEventById(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const event = await eventsService.getEvent(id);
    res.send(event);
}

async function createEvent(req: Request, res: Response) {
    const event: CreateEvent = req.body;
    await eventsService.createEvent(event);
    res.sendStatus(201);
}

async function updateEvent(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const event: UpdateEvent = req.body;
    await eventsService.updateEvent(id, event);
    res.sendStatus(204);
}

async function deleteEvent(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    await eventsService.deleteEvent(id);
    res.sendStatus(204);
}

const eventsController = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
}

export default eventsController;