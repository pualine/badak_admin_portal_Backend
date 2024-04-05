import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.controllers.js';


const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;