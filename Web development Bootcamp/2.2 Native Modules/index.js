const fs=require("fs");

// fs.writeFile("same.txt","Hello NodeJS!!",(err)=>{
//     if (err) throw err;
//     console.log("File is saved!!");
// });

fs.readFile("message.txt",'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
});