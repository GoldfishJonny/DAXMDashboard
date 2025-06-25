import express from 'express';
import pool from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM clients');
    res.json(result.rows);
});

export default router;