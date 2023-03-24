import { Router } from "express";

import { CreateUser } from "./Controllers/CreateUser";
import { Login } from "./useCases/Auth/Login";
import { EditName } from "./useCases/User/EditnName";

export const router = Router();

// Auth routes
router.post("/api/register", CreateUser);
router.post("/api/login", Login);

//Edit
router.post("/api/edit/:id", EditName);
