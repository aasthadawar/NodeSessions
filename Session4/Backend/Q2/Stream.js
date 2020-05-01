const fs = require('fs');

const readFilename =
  __dirname +
  '/assests/Coronavirus COVID-19 Symptoms, Causes, Prevention Nursing Review.mp4';

const writeFilename = __dirname + '/assests/write.txt';

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

// data event will fire as the data will come
// along with write in a file through write stream
readStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('chunk done');
  writeStream.write(chunk);
});

// end event will fire when the file written is done
writeStream.on('end', () => {
  console.log('file is written');
});

// end event will fire when the file is read completely
readStream.on('end', () => {
  console.log('file is read');
});

// close event will be fire when the write stream is closed
writeStream.on('close', () => {
  console.log('write stream is closed');
});

// close event will be fire when the read stream is closed
readStream.on('close', () => {
  console.log('read stream is close');
});
