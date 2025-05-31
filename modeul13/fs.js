// 1.syncronus
  //1.file read  I/O intr

// 2.asynctonus

const fs = require("fs");
console.log('task 1')


const text = " i will be coming fullsatc developer insahallha"

fs.readFile("./hellow.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("something went wrong", err)
        return;
    }
    console.log(data)
});



// console.log(data)