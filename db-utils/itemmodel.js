import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    itemName: {
        type: 'string',
        require: true,
    },
   
    imageUrl:{
        type:'string',
        require: true,
    },
    itemType:{
        type:"string",
        require:true,
    },
    price:{
        type:"string",
        require:true,
    }
});
export const item = mongoose.model('Item ',itemSchema);