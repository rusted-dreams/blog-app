import express from "express";
import userRouter from "./routes/user.routes";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO MY BLOGS");
});

app.use("/api/v1/usr/", userRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: "404 Page not found!!",
  });
});

export default app;
