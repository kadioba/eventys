import { CreateCustomer } from "@/protocols/protocols";
import customerService from "@/services/customerService";
import { Request, Response } from "express";


async function createCustomer(req: Request, res: Response) {
    const customer = req.body as CreateCustomer;

    await customerService.createCustomer(customer);
    res.sendStatus(201);
}

async function getCustomers(req: Request, res: Response) {
    const customers = await customerService.getCustomers();
    res.send(customers);
}

async function getCustomer(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    const customer = await customerService.getCustomer(id);
    res.send(customer);
}

async function updateCustomer(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const customer = req.body as CreateCustomer;

    await customerService.updateCustomer(id, customer);
    res.sendStatus(200);
}

async function deleteCustomer(req: Request, res: Response) {
    const id: number = Number(req.params.id);

    await customerService.deleteCustomer(id);
    res.sendStatus(200);
}

const customerController = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}

export default customerController;