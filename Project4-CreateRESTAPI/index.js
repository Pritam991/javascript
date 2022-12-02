import  express  from "expresss";
import bodyParser from "body-parser";

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.get('/', (req, res) =>{
 

 res.send('Hello from Homepage');
});

app.listen(PORT, () =>
console.log(`Server running on port: http://localhost:${PORT}`))

