import SongInstance from "../models/songModel.js" 
import mongoose from 'mongoose';
import songs from "../../client/src/reducers/songs.js";

export const getSongs = async (req, res) => {
    try {
        const songInstances = await SongInstance.find();

        res.status(200).json(songInstances) // means it went well
    } catch(err) {
            res.status(404).json({ message: err.message });// didnt go well...
    }
}

export const createSong = async (req, res) => {
    const song = req.body;

    const newSong = new SongInstance(song)
    try {
        await newSong.save();

        res.status(201).json(newSong)
    } catch (err) {
        res.status(409).json({message:err.message});
    }
};

export const updateSong = async (req, res) => {
    const { id: _id } = req.params;
    const song = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('Post with that ID does not exist')

   const updatedSong = await SongInstance.findByIdAndUpdate(_id, song, {new:true});

   res.json(updatedSong)

}