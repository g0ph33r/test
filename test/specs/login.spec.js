const Login = require('../pageObjects/Login.page.js');

const login = new Login();

const validUser = {
    email: 'valid@user.com',
    password: 'pass123'
};

describe('Login Page', function () {
    beforeEach(function() {
        browser.url('./');
    });

    

    it('should let you login with valid credentials', function () {
        login.login(validUser);

        
    });

    it('should error on a missing email', function () {
        login.login({
            ...validUser,
            email: ''
        });

        
    });

    
})
