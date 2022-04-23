import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Controllers
import { usersFeatures } from './controllers/usersFeatures';

// Config
dotenv.config();
const { HTTP_PORT } = process.env;

const app = express();
app.use(bodyParser.json());

// Endpoints
/**
 * Endpoint to get a list of the features that are enabled for a given user
 */
app.get(`/`, (req, res) => usersFeatures(req, res));

// Init
app.listen(HTTP_PORT, () => console.log(`Server running on Port ${HTTP_PORT}`));
