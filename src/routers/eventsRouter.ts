import eventsController from "@/controllers/eventsController";
import validateBodyMiddleware from "@/middlewares/validateBodyMiddleware";
import { createEventSchema, updateEventSchema } from "@/schemas/eventSchema";
import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get("/events", eventsController.getEvents);
eventsRouter.get("/events/:id", eventsController.getEventById);
eventsRouter.post("/events", validateBodyMiddleware(createEventSchema), eventsController.createEvent);
eventsRouter.put("/events/:id", validateBodyMiddleware(updateEventSchema), eventsController.updateEvent);
eventsRouter.delete("/events/:id", eventsController.deleteEvent);

export default eventsRouter;