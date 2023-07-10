import { CreateEvent, UpdateEvent } from "@/protocols/protocols";
import eventsRepository from "@/repositories/eventsRepository";

async function getEvents() {
    const events = await eventsRepository.getEvents();
    return events;
}

async function getEvent(id: number) {
    const event = await eventsRepository.getEvent(id);
    return event;
}

async function createEvent(event: CreateEvent) {
    event.date = new Date(event.date)

    await eventsRepository.createEvent(event);
}

async function updateEvent(id: number, event: UpdateEvent) {
    if (event.date) {
        event.date = new Date(event.date)
    }

    await eventsRepository.updateEvent(id, event);
}

async function deleteEvent(id: number) {
    await eventsRepository.deleteEvent(id);
}

const eventsService = {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

export default eventsService;
