import express from 'express';
import { getUsers } from '../controllers/usersController.js';

const router = express.Router();

export default (supabase) => {
  router.get('/', async (req, res) => {
    const { data, error } = await getUsers(supabase);
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.json(data);
  });

  return router;
};
