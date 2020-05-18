const userService = require('../service/user');

const userOperations = {
    create : async (req,res) => {
        let response;
        let userFoundOrNot = await userService.read(req.body.email);
        if(userFoundOrNot.length===0){
            let user = await userService.create(req.body);
            if(user){
                response = 'successfully register';
            }
            else{
                response = 'cannot register';
            }
        }
        else{
            response = 'Already registered please Login';
        }
        res.send(response);
    }
};

module.exports = userOperations;