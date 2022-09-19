import express from "express";
import { createMessage, getMessages } from "../controllers/message.js";
import auth from "../middleware/auth.js";


import noticeModal from "../models/tenatNotice.js";
const router = express.Router();





router.get("/", getMessages);


router.post("/", auth, createMessage);



export default router;
