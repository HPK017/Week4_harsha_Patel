import express from 'express'
import { addorg, generateInvoice, payment } from '../controller/organizationController';

const router = express.Router();

router.post('/', async(req,res)=>addorg(req,res))

router.post('/payments', async(req,res)=>payment(req,res))


router.get('/', async(req,res)=>generateInvoice(req,res))

export default router;