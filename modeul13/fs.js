// 1.syncronus
  //1.file read  I/O intr

// 2.asynctonus

const fs = require("fs");
console.log('task 1')


const text = " i will be coming fullsatc developer insahallha"
fs.writeFileSync("./hellow.txt", text);

console.log("tesk3")

const data = fs.readFileSync("./hellow.txt", { encoding: "utf-8" })

console.log('task4')
console.log(data)