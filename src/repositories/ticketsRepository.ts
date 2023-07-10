import prisma from "@/configs/databaseConfig";
import { UpdateTicket } from "@/protocols/protocols";

async function createTicket(eventId: number, userId: number) {
    await prisma.ticket.create({
        data: {
            eventId: eventId,
            customerId: userId,
            updatedAt: new Date(),
        }
    })
}

async function getTicketByUserId(userId: number) {
    const ticket = await prisma.ticket.findFirst({
        where: {
            customerId: userId
        }
    })
    return ticket;
}

async function getTicketByEventId(eventId: number) {
    const ticket = await prisma.ticket.findFirst({
        where: {
            eventId
        }
    })
    return ticket;
}

async function getTicketById(id: number) {
    const ticket = await prisma.ticket.findUnique({
        where: {
            id
        }
    })
    return ticket;
}

async function updateTicket(id: number, ticket: UpdateTicket) {
    await prisma.ticket.update({
        where: {
            id
        },
        data: {
            customerId: ticket.customerId
        }
    })
}

async function deleteTicket(id: number) {
    await prisma.ticket.delete({
        where: {
            id
        }
    })
}

async function markUsedTicket(id: number) {
    await prisma.ticket.update({
        where: {
            id
        },
        data: {
            used: true
        }
    })
}

const ticketsRepository = {
    createTicket,
    getTicketByUserId,
    getTicketByEventId,
    getTicketById,
    updateTicket,
    deleteTicket,
    markUsedTicket
}

export default ticketsRepository;