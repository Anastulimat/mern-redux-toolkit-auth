import express from "express";
import {authUser, getUserProfile, logoutUser, registerUser, updateUserProfile} from "../controllers/userController.js";
import asyncHandler from "express-async-handler";
const router = express.Router();
import {protect} from "../middleware/authMiddleware.js";

router.post('/', asyncHandler(registerUser));
router.post('/auth', asyncHandler(authUser));
router.post('/logout', asyncHandler(logoutUser));

router.route('/profile')
    .get(asyncHandler(protect), asyncHandler(getUserProfile))
    .put(asyncHandler(protect),asyncHandler(updateUserProfile));


export default router;