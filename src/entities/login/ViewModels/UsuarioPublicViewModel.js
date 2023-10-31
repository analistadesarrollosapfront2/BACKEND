const usuariosCqrs = require('../Cqrs/usuariosCqrs');


class UsuarioPublicViewModel {
    
    userid;
    username;

    constructor(puserid, pusername){
        this.userid = puserid;
        this.username = pusername;
    }


 }
module.exports = new UsuarioPublicViewModel();
