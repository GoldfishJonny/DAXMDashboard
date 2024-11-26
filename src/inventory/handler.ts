import {Request, Response} from 'express';
import InventoryService from './service';

export async function getAllInventory(req: Request, res: Response) {
  try{
    const inventoryItems = await InventoryService.getAll();
    res.status(200).json(inventoryItems);
  } catch (error : unknown) {
    if (error instanceof Error) {
      res.status(500).json({error : error.message});
    } else {
        res.status(500).json({error : 'An unknown error occurred'});
        }
    }
}

export function getInventoryById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const inventoryItem = InventoryService.getItemById(id);
    res.status(200).json(inventoryItem);
  } catch (error : unknown) {
    if (error instanceof Error) {
      res.status(500).json({error : error.message});
    } else {
        res.status(500).json({error : 'An unknown error occurred'});
        }
    }
}

export async function createInventory(req: Request, res: Response) {
  const newItem = req.body;
  try {
    const newInventoryItem = await InventoryService.createItem(newItem);
    res.status(201).json(newInventoryItem);
  } catch (error : unknown) {
    if (error instanceof Error) {
      res.status(500).json({error : error.message});
    } else {
        res.status(500).json({error : 'An unknown error occurred'});
        }
    }
}

export async function updateInventory(req: Request, res: Response) {
  const { id } = req.params;
  const updatedItem = req.body;
  try {
    const updatedInventoryItem = await InventoryService.updateItem(id, updatedItem);
    if (!updatedInventoryItem) {
      return res.status(404).json({error : 'Inventory item not found'});
    }
    res.status(200).json(updatedInventoryItem);
  } catch (error : unknown) {
    if (error instanceof Error) {
      res.status(500).json({error : error.message});
    } else {
        res.status(500).json({error : 'An unknown error occurred'});
        }
    }
}