const {Pool}=require('pg')
const dotenv=require('dotenv')

dotenv.config()
 const client = new Pool({
  host: "localhost",
  port: process.env.PSQL_PORT,
  database: process.env.PSQL_DB,
  user: process.env.PSQL_USER,
  password: process.env.PSQL_PASS,
});

client.connect((err) => {
  if (!err) {
    console.log("database connected successfully");
  } else {
   
    console.log("connection error");
  }
});

module.exports=client