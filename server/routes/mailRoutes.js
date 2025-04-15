import express from "express";
import newsLetter from "../controllers/mailController.js";

const router = express.Router();

router.post('/subscribe', newsLetter);

export default router;