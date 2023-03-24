import { Request, Response } from "express";
import User, { IUser } from "../Models/User";

export async function CreateUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  // Verificar se todos os campos obrigatórios foram informados
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Dados incompletos" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  try {
    const user: IUser = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
