//asynchronous
const {readFile,writeFile}=require("fs")
console.log("1")
////callback function is the function passed inside another function as a argument
readFile('./simple/first.txt','utf-8',(err,res)=>{//err=error,res=result
    if(err){
        ////console.log(error)(if you are having any error in the code that you have written that will be displayed through this command)
        return
    }
    ////const read=res;
    //console.log(res)
    console.log("2")
})
writeFile('./simple/first.txt','hello world',(err,res)=>{
    if(err){
        return
    }
    //console.log(res)
    console.log("3")
})
console.log("4")
// const fs=require('fs')
// const read=fs.readFileSync
// const write=fs.writeFilesSync
// const {readFileSync,writeFileSync}=require('fs')
// console.log("1")
// const read=readFileSync('./simple/first.txt','utf-8')//utf is used to convert or read the acii value in human readable form
// //writeFileSync('./simple/first.txt','hii')
// console.log("2")
// //console.log(read)
// writeFileSync('./simple/first.txt','hii',{flag:'a'})
// console.log("3")
// writeFileSync('./simple/second.txt','hii',{flag:'a'})
// console.log("4")