import SongInstance from "../models/songModel.js" 

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