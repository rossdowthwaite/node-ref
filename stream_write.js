var fs = require("fs");
var data = 'Willy bumm bum';

// Create a writer stream
var writeStream =  fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8;
writeStream.write(data, 'UTF8');

// Mark the end of the file
writeStream.end();

// Handle stream events --> finish, and error
writeStream.on('finish', function() {
	console.log('Write completed');
})

writeStream.on('error', function(err){
	console.log(err.stack);
})

console.log("Program Ended");