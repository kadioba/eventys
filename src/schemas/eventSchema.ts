import { CreateEvent, UpdateEvent } from "@/protocols/protocols";
import Joi from "joi";

export const createEventSchema = Joi.object<CreateEvent>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    place: Joi.string().required(),
    price: Joi.number().required(),
});

export const updateEventSchema = Joi.object<UpdateEvent>({
    name: Joi.string(),
    description: Joi.string(),
    date: Joi.date(),
    place: Joi.string(),
    price: Joi.number(),
});