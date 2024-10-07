const {Pool}=require('pg')

 const client = new Pool({
  host: "localhost",
  port: 5432,
  database: "spstask",
  user: "postgres",
  password: "mathi@0609",
});

client.connect((err) => {
  if (err) {
    console.log("connection error");
  } else {
    console.log("database connected successfully");
  }
});

module.exports=client