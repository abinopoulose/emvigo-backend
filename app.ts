import express, { Application } from 'express';
import apiRoutes from './src/routes/apiRouter';
import errorHandler from './src/middleware/errorHandler';
import dotenv from 'dotenv';
import { AppDataSource } from './src/configs/data-source';
import cors from "cors";
var path = require('path');


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/public',express.static(path.join(__dirname, 'public')));


app.use(cors({origin: "*",credentials: true,}));

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to database", err)
    });


app.use(express.json());
app.use('/api/', apiRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});