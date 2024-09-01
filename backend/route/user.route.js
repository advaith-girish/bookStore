import express from "express";
import { Login, createUser } from "../controller/user.controller.js";

const router = express.Router();
router.post("/signup",createUser);
router.post("/login",Login);

export default router;  