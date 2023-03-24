import generateToken from "../../Utils/generateToken";
import { Request, Response } from "express";
import User from "../../Models/User";

export async function Login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  try {
    if (!user) {
      res.sendStatus(401);
      return;
    }

    if (await user?.matchPassword(password)) {
      const payload = user?._id.toString();
      const token = generateToken(payload);

      res.status(200).json({
        _id: user?._id,
        name: user?.name,
        token,
      });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
