import express from "express";
import all from "./all";

const carRoutes = new express.Router({ mergeParams: true });

carRoutes.get("/", all);

export default carRoutes;
