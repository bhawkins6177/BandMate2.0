import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import songsRoute from './routes/songs.js'
import userRoute from './routes/user.js'
import dotenv from "dotenv";




const app = express();

dotenv.config();

// might not need the below  2 middleware functions 

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());


app.use('/songs', songsRoute);
app.use('/user', userRoute);



const port = process.env.PORT || 5000; // if you have issues change this
//process.env.CONNECTION_URL
mongoose.connect(process.env.CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, ()=> console.log(`Server is listening on port: ${port}`)))
    .catch((err) => console.log(err.message));
   

    // need to get .env working 
//mongoose.set('useFindAndModify', false)// spitsout an  error, I believe the newest update to mongoose made its default set to false
    

