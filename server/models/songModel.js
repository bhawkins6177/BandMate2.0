import mongoose  from "mongoose";

const songSchema = mongoose.Schema({
    title: String,
    composer: String,
    instruments: [String],
    originalKey: String,
    maleLead: Boolean,
    femaleLead: Boolean,
    duet: Boolean,
    difficulty: String,
    otherNotes: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const SongInstance = mongoose.model('Songinstance', songSchema);

export default SongInstance;