import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const storeSchema = new mongoose.Schema(
    {
        url: {
            type:String
        },
        filename: {
            type: String
        },
        
    },
    {
     timestamps: true,
     versionKey: false   
    }
);

storeSchema.plugin(MongooseDelete, {overrideMethods: "all"})

const storageModel = mongoose.model('Storage', storeSchema)

export default storageModel