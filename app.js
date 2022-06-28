const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=["Buy Food"];
let work=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res)
{
var today=new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day= today.toLocaleDateString("en-US",options);

res.render("list",{listtitle: day,newlistitems: items});
});
app.get("/work",function(req,res){
    res.render("list",{listtitle: "Work List",newlistitems:work})
});
app.post("/",function(req,res){
    var item=req.body.newitem;
    items.push(item);
    res.redirect("/");
});
app.post("/work",function(req,res){
    var workitem=req.body.newitem;
    work.push(workitem);
    res.redirect("/work");
});
app.listen(3000,function()
{
    console.log("Server started on port 3000");
});
