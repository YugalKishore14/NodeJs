import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/connectDb.js';
import contactsRouter from './routers/contacts.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT_NUMBER;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

connectDb();

app.use('/', contactsRouter);

app.listen(port, () => {
    console.log(`Server started: http://localhost:${port}`);
});
