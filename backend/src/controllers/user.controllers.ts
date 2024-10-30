import { NextFunction, Request, Response } from "express";

type User = {
  name: string;
  email: string;
  password: string;
};

export const registerUsr = (req: Request, res: Response,next: NextFunction) => {
  const name: string = req.body.name;
  const email: string = req.body.email;
  const password: string = req.body.password;

  res
    .status(200)
    .json({ success: true, status: 200, message: `${name} is now registered!` });
};
