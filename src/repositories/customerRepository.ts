import { CreateCustomer } from "@/protocols/protocols";
import prisma from "configs/databaseConfig";

async function createCustomer(customer: CreateCustomer) {
    await prisma.customer.create({
        data: customer
    })
}

async function getCustomers() {
    const customers = await prisma.customer.findMany();
    return customers;
}

async function getCustomer(id: number) {
    const customer = await prisma.customer.findUnique({
        where: {
            id
        }
    });
    return customer;
}

async function updateCustomer(id: number, customer: CreateCustomer) {
    await prisma.customer.update({
        where: {
            id
        },
        data: customer
    })
}

async function deleteCustomer(id: number) {
    await prisma.customer.delete({
        where: {
            id
        }
    })
}

const customerRepository = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}

export default customerRepository;