import prisma from "@/configs/databaseConfig";
import { CreateEvent, UpdateEvent } from "@/protocols/protocols";

async function getEvents() {
    const events = prisma.event.findMany();
    return events;
}

async function getEvent(id: number) {
    const event = prisma.event.findUnique({
        where: {
            id
        }
    })
    return event;
}

async function createEvent(event: CreateEvent) {
    await prisma.event.create({
        data: event
    })
}

async function updateEvent(id: number, event: UpdateEvent) {
    await prisma.event.update({
        where: {
            id
        },
        data: event
    })
}

async function deleteEvent(id: number) {
    await prisma.event.delete({
        where: {
            id
        }
    })
}

const eventsRepository = {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

export default eventsRepository;