import express, { Express } from "express";

const app: Express = express();

app.get("/health", (req, res) => {
  res.status(200).send("bolg app backend is up and healthy!");
});

// handle all routes
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    msg: "Resource Not Found",
  });
});

export default app;
