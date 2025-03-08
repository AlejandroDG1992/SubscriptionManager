import express from 'express';
import { getSubscriptions } from '../controllers/subscriptionsController.js';

const router = express.Router();

export default (supabase) => {
  router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { data, error } = await getSubscriptions(supabase, userId);
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.json(data);
  });

  return router;
};
