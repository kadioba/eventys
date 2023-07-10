import { CreateCustomer } from "@/protocols/protocols";
import customerRepository from "@/repositories/customerRepository";


async function createCustomer(customer: CreateCustomer) {
    await customerRepository.createCustomer(customer)
}

async function getCustomers() {
    const customers = await customerRepository.getCustomers();
    return customers;
}

async function getCustomer(id: number) {
    const customer = await customerRepository.getCustomer(id);
    return customer;
}

async function updateCustomer(id: number, customer: CreateCustomer) {
    await customerRepository.updateCustomer(id, customer);
}

async function deleteCustomer(id: number) {
    await customerRepository.deleteCustomer(id);
}

const customerService = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}

export default customerService;