import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { HTTP_PORT } = process.env;

const app = express();

app.get(`/`, (req, res) => res.send(`Hello friend`));

app.listen(HTTP_PORT, () => console.log(`Server running on Port ${HTTP_PORT}`));
