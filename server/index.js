import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import songsRoute from './routes/songs.js'




const app = express();

dotenv.config();

// might not need the below  2 middleware functions 

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());


app.use('/songs', songsRoute );
// how can I make the below url private? **Look up dotemv**
const connectionURL = 'mongodb+srv://bhawkins6177:noodle67@cluster0.jyonl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const port = process.env.PORT || 5000; // if you have issues change his to 3000 or 4000;

mongoose.connect(process.env.connectionURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, ()=> console.log(`Server is listening on port: ${port}`)))
    .catch((err) => console.log(err.message));

    
//mongoose.set('useFindAndModify', false)// spitsout an  error, I believe the newest update to mongoose made its default set to false
    

