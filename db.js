 import mysql from "mysql2"

 // 🛡️ Sentinel: Replaced hardcoded credentials with environment variables to prevent secret leakage
 const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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