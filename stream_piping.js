var fs = require("fs");

// Create a readable stream 
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriterStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(WriterStream);

console.log('Program ended');