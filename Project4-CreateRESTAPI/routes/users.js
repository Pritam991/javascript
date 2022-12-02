import  express  from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [];


//all routes in here are starting with /users
router.get('/', (req, res) =>{
   
    res.send(users);
} );

router.post('/', (req, res) =>{
    //console.log('POST ROUTE REACHED');
    const user = req.body;

 //  const userId= uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  
  // const userWithId = { ...user, id: uuidv4() }

   users.push({ ...user, id: uuidv4() });

   // users.push(user);

    res.send(`User with the name ${user.fname} added to the database!`);

    //console.log(req.body);

    //users.push();
  //  res.send('POST ROUTE RERACHED');
    
});



export default router;