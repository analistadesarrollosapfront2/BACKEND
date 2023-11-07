const usuariosCqrs = require('../Cqrs/usuariosCqrs');


class usuarioPublicViewModel {
    
    userid;
    username;
    usertype;

    constructor(puserid, pusername, pusertype){
        this.userid = puserid;
        this.username = pusername;
        this.usertype = pusertype;
        return[
            this.userid,
            this.username,
            this.usertype
        ];
    }

 }
module.exports = new usuarioPublicViewModel();
