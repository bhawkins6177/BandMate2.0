import jwt, {decode} from 'jsonwebtoken';
import dotenv from 'dotenv';

const secret = 'test';

dotenv.config();
// everytime the user creates, deleats, or edits songs/sets the token needs to be checked. 
const auth = async (req, res, next) => { 
    try {

        const token = req.headers.authorization.split(' ')[1];//why does authorization have to be lowercase here but uppercase on the front end? Uppercase returned no header. 
        // console.log(req.headers);
        // how to tell if token is user created or from google?
        const isCustomToken = token.length < 500

        let decodedData;

        if(token && isCustomToken) {
            decodedData = jwt.verify(token, secret);// if the dotenv doesnt work change this to 'test' for now
            // once the user is varified  we store the id into req.userId
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            // where is the google user id stored and how do I access it? 
            req.userId?.sub ;
        }
        next();
    } catch (error) {
        console.log(error) 
    }
}

export default auth;