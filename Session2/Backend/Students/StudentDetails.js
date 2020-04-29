
const url = require('url');
const studentsArray = require('./StudentsObject');

// function to handle request response operations
const studentRequestResponse = (request, response) => {
  
  let method = request.method;
  let queryString = url.parse(request.url, true).query.branch;

  // for the students route
    if (method === 'GET') {
      if (queryString === undefined) {
        var arr = studentsArray;
      } else {
        var arr = studentsArray.filter((items) =>
          items.branch.toLowerCase().includes(queryString),
        );
      }
      response.end(JSON.stringify(arr));
    } else {
      response.end('wrong method');
    }
  
};

module.exports = studentRequestResponse;