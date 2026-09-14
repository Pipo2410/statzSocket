import express from "express";

const PORT = 8000;

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "statzSocket server is running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
