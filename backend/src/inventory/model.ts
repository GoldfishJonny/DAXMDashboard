import mongoose, { Schema, Document} from "mongoose";

interface IInventory extends Document {
    id : string;
    name : string;
    size : string;
    quantity : number;
    price : number;
    picture : string;
}

const InventorySchema: Schema = new Schema({
    id : {type : String, required : true},
    name : {type : String, required : true},
    size : {type : String, required : true},
    quantity : {type : Number, required : true},
    price : {type : Number, required : true},
    picture : {type : String, required : true}
});

export default mongoose.model<IInventory>('Inventory', InventorySchema);