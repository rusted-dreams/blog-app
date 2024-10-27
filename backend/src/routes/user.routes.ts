import express from "express";

const userRouter = express.Router();

userRouter.route("/register").post((req, res) => {
  res.send("hi");
});

export default userRouter;
