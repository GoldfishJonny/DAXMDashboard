import { Router } from 'express';
import * as InventoryHandler from './handler';

const inventoryRouter = Router();

inventoryRouter.get('/', InventoryHandler.getAllInventory);
inventoryRouter.get('/:id', InventoryHandler.getInventoryById);
inventoryRouter.post('/', InventoryHandler.createInventory);
//inventoryRouter.put('/:id', InventoryHandler.updateInventory);

export default inventoryRouter;