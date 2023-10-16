import express  from "express"
import itemRouter from "./routes/items.js";
import connectToDb from "../../itemcatalog-backend/db-utils/mongoose.js";
import cors from "cors";
const app = express();
const PORT =process.env.PORT || 8888;

await connectToDb();
app.use(cors());
app.use(express.json());
app.use("/api",itemRouter);
app.get('/',  (req, res)=> {
  res.send('Hello World');
})

app.listen(PORT,()=>{console.log("run")});