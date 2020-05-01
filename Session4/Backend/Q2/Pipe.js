const fs = require('fs');

const readFilename =
  __dirname +
  '/assests/Coronavirus COVID-19 Symptoms, Causes, Prevention Nursing Review.mp4';

const writeFilename = __dirname + '/assests/pipe.txt';

const readStream = fs.createReadStream(readFilename);

const writeStream = fs.createWriteStream(writeFilename);

// open event will fire when the read stream are open
readStream.on('open', () => {
  console.log('read stream is opened');
});

// open event will fire when the write stream are open
writeStream.on('open', () => {
  console.log('write stream is opened');
});

/* pipe method will transfer the data as it is read by readstream in chunks and
written in file at the same time in chunks by write stream*/
readStream.pipe(writeStream);

// close event will be fire when the write stream is closed
writeStream.on('close', () => {
  console.log('write stream is closed');
});

// close event will be fire when the read stream is closed
readStream.on('close', () => {
  console.log('read stream is close');
});
