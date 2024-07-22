import express from "express";
import { requestAccess } from "./controllers/accessRequestController";

const router = express.Router();

router.post("/api/access-request", requestAccess);

export default router;
