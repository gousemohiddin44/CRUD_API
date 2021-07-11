import express from "express";
import { v4 as uuidv4 } from 'uuid';

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

//:id means value holder , accesses using req.params
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser); // function is defined , less cluttering of code.


export default router;