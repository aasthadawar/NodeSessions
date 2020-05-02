const url = require('url');

  // function to handle request response operations
  const userRequestResponse = (request, response) => {
    let method = request.method;
    let queryString = url.parse(request.url, true).query.userid;

    // for users route
      if (method === 'GET') {
        const usersObject = require('./UserObject');
        response.setHeader('Access-Control-Allow-Origin', '*');
        if (queryString != undefined) {
          var arr = usersObject.users.filter((items) =>
            items.username.toLowerCase().includes(queryString),
          );
        } else {
          var arr = usersObject.users;
        }
        response.end(JSON.stringify(arr));
      } else {
        response.end('wrong method');
      }
    
  };

  module.exports = userRequestResponse
  

