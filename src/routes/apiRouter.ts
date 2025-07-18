import { Router } from 'express';
import { getHome, testDbConnection } from '../controllers/homeController';
const router = Router();

router.get('/', getHome);  
router.get('/test', testDbConnection);  


export default router;
