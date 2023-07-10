import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

function validateBodyMiddleware(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            return res.status(400).send(error.details.map((err) => err.message));
        } else {
            next();
        }
    }
}

export default validateBodyMiddleware;