// const fs=require('fs')
// const read=fs.readFileSync
// const write=fs.writeFilesSync
const {readFileSync,writeFileSync}=require('fs')

const read=readFileSync('./simple/first.txt','utf-8')//utf is used to convert or read the acii value in human readable form
//writeFileSync('./simple/first.txt','hii')

console.log(read)
writeFileSync('./simple/first.txt','hii',{flag:'a'})

writeFileSync('./simple/second.txt','hii',{flag:'a'})
