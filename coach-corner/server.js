import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from"path";
import express from 'express';
import { connection, Task } from "./src/models";

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// env variables
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// APIs
app.use("/api", require("./src/api").default);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
