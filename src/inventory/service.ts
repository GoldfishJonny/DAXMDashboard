import InventoryRepository from './repository';

class InventoryService {
    async getAll(){
        return await InventoryRepository.getAll();
    }

    async getItemById(id: string){
        return await InventoryRepository.getItemById(id);
    }

    async createItem(newItem: any){
        return await InventoryRepository.createItem(newItem);
    }

    async updateItem(id: string, updatedItem: any){
        return await InventoryRepository.updateItem(id, updatedItem);
    }
}

export default new InventoryService();