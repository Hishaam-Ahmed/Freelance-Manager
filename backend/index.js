import express from 'express';
import { PORT, mongodbURL } from "./config.js";
import mongoose from 'mongoose';
import FreelancerRoute from './routes/FreelancerRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get(('/'), (req, res) => {
    // console.log(req);
    return res.status(234).send('Welcome to freelance manager');
});

app.use('/freelancers', FreelancerRoute);

mongoose.connect(mongodbURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to: ${PORT}`);
        })
    })
    .catch((error) =>{
        console.log(error);
    });