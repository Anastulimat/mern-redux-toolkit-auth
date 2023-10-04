import express from "express";
import {authUser} from "../controllers/userController.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

router.post('/auth', asyncHandler(authUser));
export default router;