import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";
import CustomError from "./utils/CustomError";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  // console.log(req);
  
  res.status(200).send(`<h1>WELCOME TO MY BLOGS</h1>`);
});

app.use("/api/v1/usr/", userRouter);

app.all("*", (req:Request, res:Response, next:NextFunction) => {
  // res.status(404).json({
  //   success: false,
  //   status: 404,
  //   message: "404 Page not found!!",
  // });
  next(new CustomError(404, `url ${req.originalUrl} not found on server`));
});

app.use(errorHandler);

export default app;
