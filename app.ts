import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

import { router } from "./router";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    const port = 3001;

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Erro ao conectar o banco de dados"));
