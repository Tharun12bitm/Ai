 import mysql from "mysql2"

 const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Dinesh@2004",
    database:"logindb"
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