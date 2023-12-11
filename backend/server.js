const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app= express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"employee"
})
app.get('/',(req,res)=>{
const sql="SELECT * FROM details";
db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
})
})
app.post('/',(req,res,next)=>{
const sql="INSERT INTO details (name,department,phone,employee_id,salary,dob) VALUES(?,?,?,?,?,?)";
const values=[
    req.body.name,
    req.body.department,
    req.body.phone,
    req.body.employee_id,
    req.body.salary,
    req.body.dob,
    
    
];
db.query(sql, values ,(err,data)=>{
    if(err) {
        return console.log(err);
    }
    return console.log("created");

}
);
});


    app.delete('/:employee_id',(req,res,next)=>{
        const sql="DELETE FROM details WHERE employee_id=?";
        const id=req.params.employee_id;
        
        db.query(sql,[id] ,(err,data)=>{
            if(err) {
                return console.log(err);
            }
            return console.log("deleted");
        
        }
        );
        });
    
app.listen(8081,()=>{
    console.log("listening...");
})