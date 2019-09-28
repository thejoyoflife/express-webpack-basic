import express from "express";
import all from "./all";
import single from "./single";
import cars from "./cars";
import findObject from "../../utils/findObject";

const models = new express.Router();

models.param("modelId", findObject("model"));

models.get("/", all);
models.get("/:modelId", single);
models.use("/:modelId/cars", cars);

export default models;
