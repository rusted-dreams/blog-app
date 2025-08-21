import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Welcome to blog app backend");
});

// handle all routes
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Resource Not Found",
  });
});

export default app;
