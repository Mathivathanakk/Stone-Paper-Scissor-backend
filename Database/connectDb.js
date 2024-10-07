const {Pool}=require('pg')
const dotenv=require('dotenv')

dotenv.config()
 const client = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
});



client.connect((err) => {
  if (!err) {
    console.log("database connected successfully");
  } else {
   
    console.log("connection error");
  }
});

module.exports=client