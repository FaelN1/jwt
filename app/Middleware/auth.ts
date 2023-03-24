import jwt from "jsonwebtoken"; // importe apenas jwt em vez de tudo
import { Request, Response, NextFunction } from "express";
import User from "../Models/User";

interface Payload {
  id: string;
}

interface AuthenticatedRequest extends Request {
  user?: string; // Use letra minúscula 's' para string
}

export const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined; // Inicialize token como indefinido

  let secret: string = "";
  if (process.env.JWT_SECRET) {
    secret = process.env.JWT_SECRET;
  }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret) as Payload; // Converte o tipo de decoded para Payload
      const user = await User.findById(decoded.id).select("-password"); // Renomeia 'pass' para 'user' para maior clareza

      if (typeof user == "object" && user !== null) {
        // Verifica se o usuário é um objeto e não nulo
        req.user = user._id.toString(); // Define req.user como string
      }

      if (decoded.id == req.params.userId) {
        // Verifica se o ID de usuário decodificado corresponde ao ID de usuário solicitado
        next(); // Chama a próxima função middleware
      } else {
        const decodedId = decoded.id;
        const paramsId = req.params.id;

        res.status(403).json({ message: "Unauthorized" }); // Responde com o código de status 403 e uma mensagem de erro
      }
    } catch (error) {
      res.status(401).json({ message: "Invalid Token" }); // Responde com o código de status 401 e uma mensagem de erro
    }
  } else {
    res.status(401).json({ message: "Unauthorized" }); // Responde com o código de status 401 e uma mensagem de erro
  }
};
