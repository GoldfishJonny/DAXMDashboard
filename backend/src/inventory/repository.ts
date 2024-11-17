import InventoryModel from './model';

class InventoryRepository {
    async getAll(){
        return await InventoryModel.find();
    }

    async getItemById(id: string){
        return await InventoryModel.findById(id);
    }

    async createItem(newItem: any){
        const inventoryItem = new InventoryModel(newItem);
        return await inventoryItem.save();
    }

    async updateItem(id: string, updatedItem: any){
        return await InventoryModel.findByIdAndUpdate(id, updatedItem, {new : true});   
    }

}

export default new InventoryRepository();