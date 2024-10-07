const express=require('express');
const cors=require('cors')
const dotenv=require('dotenv')
const gameRoute=require('./Routes/gameRouter.js')

//initalization
const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
    Credentials: true,
  })
);

app.use('/api/games',gameRoute)

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the App");
});
//running port
app.listen(process.env.PORT, () => {
  console.log("Server is running on the port");
});
