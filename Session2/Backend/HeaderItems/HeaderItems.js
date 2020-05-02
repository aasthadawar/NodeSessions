const url = require('url');
const fs = require('fs');
const path = require('path');

const headerRequestResponse = (request, response) => {
  let route = url.parse(request.url).pathname;
  let finalRoute = route.split('/')[2];
  let method = request.method;
  let fullPath;
  if (method === 'GET') {
       //route for home page
  if (`/${finalRoute}` === '/home') {
    let relativePath = '/public/Home.html';
    fullPath = path.join(__dirname, relativePath);
  } 

  else if (`/${finalRoute}` === '/about') {
    let relativePath = '/public/About.html';
    fullPath = path.join(__dirname, relativePath);
  } 

  if (`/${finalRoute}` === '/contact') {
    let relativePath = '/public/Contact.html';
    fullPath = path.join(__dirname, relativePath);
  } 

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      response.end(err);
    } else {
      response.write(content);
      response.end();
    }
  });

  } else {
    response.end('wrong url');
  } 
};

module.exports = headerRequestResponse

