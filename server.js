import express from "express";
import cors from "cors";
const app = express();

import "./config/dbconnect";

import studentRoutes from "./routers/studentRoutes";

app.use(express.json());
app.use(cors());

app.use("/students", studentRoutes);

app.listen(4000, () => console.log("Server up and running"));
