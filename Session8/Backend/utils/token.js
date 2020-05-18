const jwt = require('jsonwebtoken');

const obj = {
    secret : 'thisisthesecretkey',
    createToken(emailId){
        let tokenId = jwt.sign({'userid':'emailId'},this.secret,{expiresIn:60})
        //console.log('token is',tokenId);
        return tokenId;
    },
    verifyToken(tokenId){
        let decode = jwt.verify(tokenId, this.secret);
        if(decode && decode.userid){
            return true;
        }
        return false;
    }
}

module.exports = obj;

//let tokenId = obj.createToken('amit@gmail.com');
//let result = obj.verifyToken(tokenId)?"correct":"incorrect";
//console.log(result);