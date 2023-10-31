const usuariosCqrs = require('../Cqrs/usuariosCqrs');


class usuarioPublicViewModel {
    
    userid;
    username;

    constructor(puserid, pusername){
        this.userid = puserid;
        this.username = pusername;
        console.log(this.userid);
        console.log(this.username);
        return[
            this.userid,
            this.username
        ];
    }


 }
module.exports = new usuarioPublicViewModel();
