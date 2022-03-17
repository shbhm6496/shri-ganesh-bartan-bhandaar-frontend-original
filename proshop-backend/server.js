import express from "express";
import products, { find } from "./data/products";

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/products", (req, res) => {
  res.json(JSON.stringify(products));
});

app.get("/api/products/:id", (req, res) => {
  const product = find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server is running on Post 5000"));
