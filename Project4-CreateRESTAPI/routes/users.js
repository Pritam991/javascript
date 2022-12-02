import { Express } from "express";

const router = express.Router();

router.get('/users', (req, res) =>{
    res.send('Hello');
} );

export default router;