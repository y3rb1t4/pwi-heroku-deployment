const { create } = require('express-handlebars');
const pool =  require ('../utils/db')

class Sigup {
    constructor(email, password, verify_code) {
        this.email=email;
        this.password = password;
        this.verify_code =  verify_code;
    }
    async create()
}

