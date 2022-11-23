const fs = require('fs');

//Asynchronously using nodejs
// fs.readFile('text.txt' , (err, data) => {
//     if(err)
//         throw err;
//     console.log(`Content: ${data}`);
    
// })

//Synchronously
// const filename = 'text.txt';
// const content = fs.readdirSync(filename);
// console.log(`Content : ${content}`);

//Writing a file asynchronously
// const content = "This is the content fileadgef ";
// fs.writeFile('text.txt', content, (err) => {
//     if(err)
//         throw err;
//     console.log('It\'s Saved!');
// })

//Append a file
// new_data = "This data will be appened at the end of the file.";
// fs.appendFile('text.txt', new_data, (error) => {
//     if(error)
//         throw error;
//     console.log("Added sccessfully");
// })

const filename = 'text.txt';
fs.unlink(filename, (err) => {
    if(err)
        throw err;
    console.log("File Deleted!!")
})