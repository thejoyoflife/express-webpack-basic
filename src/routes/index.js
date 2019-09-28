import express from "express";
import modelRoutes from "./models";
import carRoutes from "./cars";

const api = new express.Router();

api.get("/", (req, res) => {
  res.status(200).json({ message: "Connected" });
});

api.use("/models", modelRoutes);
api.use("/cars", carRoutes);

export default api;
