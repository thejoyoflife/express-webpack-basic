import express from "express";
import all from "./all";
import single from "./single";
import findObject from "../../utils/findObject";

const carRoutes = new express.Router();
carRoutes.param("carId", findObject("car"));

carRoutes.get("/", all);
carRoutes.get("/:carId", single);

export default carRoutes;
