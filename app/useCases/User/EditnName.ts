import { Request, Response } from "express";
import User from "../../Models/User";

export async function EditName(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;

  const user = await User.findById(id);

  if (!user) {
    res.status(400).json("Usuário não existe!");
  }
  user!.name = name || user!.name;

  try {
    const updateUser = await user!.save();
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(400).json(error);
  }
}
