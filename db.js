 import mysql from "mysql2"

 const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD, // Security fix: Remove hardcoded credentials
    database: process.env.DB_NAME || "logindb"
 })
 db.connect((err)=>{
    if(err){
        console.log("Database connection error");
        
    }
    else{
        console.log("Database is successfully connected");
        
    }
 })
 export default db;