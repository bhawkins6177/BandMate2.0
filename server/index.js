import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import songsRoute from './routes/songs.js'


const app = express();



// might not need the below  2 middleware functions 

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
//app.use(cors(corsOptions));
app.use('/songs', songsRoute );

const connectionURL = 'mongodb+srv://bhawkins6177:noodle67@cluster0.jyonl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const port = process.env.PORT || 5000; // if you have issues change his to 3000 or 4000;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, ()=> console.log(`Server is listening on port: ${port}`)))
    .catch((err) => console.log(err.message));

    
//mongoose.set('useFindAndModify', false)// spitsout an  error, I believe the newest update to mongoose made its default set to false
    

