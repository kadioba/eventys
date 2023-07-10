import ticketsController from "@/controllers/ticketsController";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.post("/tickets/create/:eventId/:userId", ticketsController.createTicket);
ticketsRouter.get("/tickets/user/:id", ticketsController.getTicketByUserId);
ticketsRouter.get("/tickets/event/:id", ticketsController.getTicketByEventId);
ticketsRouter.get("/tickets/:id", ticketsController.getTicketById);
ticketsRouter.put("/tickets/:id", ticketsController.updateTicket);
ticketsRouter.delete("/tickets/:id", ticketsController.deleteTicket);
ticketsRouter.put("/tickets/:id/validate", ticketsController.validateTicket)

export default ticketsRouter;