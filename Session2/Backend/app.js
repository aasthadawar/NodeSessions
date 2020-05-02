const http=require('http');
const url= require('url');
const userRoute = require('./Users/UserDetails');
const studentRoute = require('./Students/StudentDetails');
const headerRoute = require('./HeaderItems/HeaderItems');

const handleRequestResponse=(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    let route = url.parse(request.url).pathname;
    let finalRoute = route.split('/')[1];
    
    if(`/${finalRoute}`==='/users'){
        userRoute(request,response)
    }
    else if(`/${finalRoute}`==='/students'){
        studentRoute(request,response)
    }
    else if(`/${finalRoute}`==='/header'){
        headerRoute(request,response)
    }
    else{
        response.end('wrong url')
    }
}

const server=http.createServer(handleRequestResponse);

server.listen(process.env.PORT || 9034,()=>{
    console.log('server start');
})