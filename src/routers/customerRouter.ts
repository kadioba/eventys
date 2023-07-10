import customerController from "@/controllers/customerContoller";
import validateBodyMiddleware from "@/middlewares/validateBodyMiddleware";
import { createCustomerSchema, updateCustomerSchema } from "@/schemas/customerSchema";
import { Router } from "express";

const customerRouter = Router();

customerRouter.post("/customer", validateBodyMiddleware(createCustomerSchema), customerController.createCustomer)
customerRouter.get("/customer", customerController.getCustomers)
customerRouter.get("/customer/:id", customerController.getCustomer)
customerRouter.put("/customer/:id", validateBodyMiddleware(updateCustomerSchema), customerController.updateCustomer)
customerRouter.delete("/customer/:id", customerController.deleteCustomer)

export default customerRouter;