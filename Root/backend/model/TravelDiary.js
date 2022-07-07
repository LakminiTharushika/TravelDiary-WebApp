import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TravelDiarySchema = new Schema ({
    title: {
        type: String,
        required: true, 
    },

    description: {
        type: String,
        required: true, 
    },

    image: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: "TravelDiary",
        required: true,
    },

});

export default mongoose.model("TravelDiary", TravelDiarySchema);