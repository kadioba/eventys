import { CreateCustomer, UpdateCustomer } from "@/protocols/protocols";
import Joi from "joi";

export const createCustomerSchema = Joi.object<CreateCustomer>({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().required(),
});

export const updateCustomerSchema = Joi.object<UpdateCustomer>({
    fullName: Joi.string(),
    email: Joi.string().email(),
    cpf: Joi.string(),
});