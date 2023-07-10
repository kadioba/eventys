import { Router } from "express";
import ticketsRouter from "./ticketsRouter";
import eventsRouter from "./eventsRouter";
import customerRouter from "./customerRouter";


const router = Router();

router.use(ticketsRouter);
router.use(eventsRouter);
router.use(customerRouter)

export default router;