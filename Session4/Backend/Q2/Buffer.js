// alloc method to create an empty buffer of length 10
const buf1 = Buffer.alloc(10);
console.log('buffer ::::',buf1);
console.log('buffer1 length ::::', buf1.length);

// from method to give value to the buffer
const buf2 = Buffer.from('hi buffer');
console.log('buffer2 binary data ::::', buf2);
console.log('buffer 2 toSting content ::::', buf2.toString());

//iteration on buffer
const buf3 = Buffer.from([50,60,70]);
for(let value of buf3){
    console.log('value is ::::',value);
}

// fill method used to initialize buffer with specified value
const buf4 = Buffer.alloc(10).fill(5);
console.log('buffer with fill method ::::',buf4);

// concat method to merge the buffers
const concatValue = Buffer.concat([buf2,buf3]);
console.log('concatenated value of buffer ::::',concatValue);

// equals to check whether the buffers are equal or not
const isBufferEqual = buf2.equals(buf3);
console.log('is buffer equal ::::',isBufferEqual);

// keys method returns the iterator over the buffer indices
const buf5 = Buffer.from('hello');
for(let key of buf5.keys()){
    console.log('key of buffer ::::',key);
}

// entries method returns iterator of the pair of index and byte of the buffer
const buf6 = Buffer.from('aastha');
for(let pair of buf6.entries()){
    console.log('index and byte pair ::::',pair);
}
