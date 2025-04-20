import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to the homepage!"));
app.use(UserRoute);

app.listen(5000, () => console.log("Server connected"));
