const url = require('url');
const fs = require('fs');
const path = require('path');

const headerRequestResponse = (request, response) => {
  let method = request.method;
  let fullPath;
  let queryString = url.parse(request.url, true).query.page;
  if (method === 'GET') {
    //route for home page
    if (queryString === 'home') {
      let relativePath = '/public/Home.html';
      fullPath = path.join(__dirname, relativePath);
    }

    // route for about page
    else if (queryString === 'about') {
      let relativePath = '/public/About.html';
      fullPath = path.join(__dirname, relativePath);
    }

    //route for contact page
    else if (queryString === 'contact') {
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

module.exports = headerRequestResponse;