const {Client}=require('pg')
const dotenv=require('dotenv')

dotenv.config()

 const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASS,
  port: process.env.POSTGRES_PORT,
});


client.connect((err) => {
  if (!err) {
    console.log("database connected successfully");
  } else {
   
    console.log("connection error");
  }
});

module.exports=client