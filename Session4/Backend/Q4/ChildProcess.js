const { execFile } = require('child_process');

const childProcess = execFile('node', ['--version'], (err, stdout, stderr) => {
  if (err) {
    console.log('error occured ::::', err);
  }
  console.log('output is ::::', stdout);
});
