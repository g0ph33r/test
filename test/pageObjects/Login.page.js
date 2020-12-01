class Login {
    get $email () { return $('input[name="email"]'); }
    get $password () { return $('input[name="password"]'); }
    get $submit () { return $('button*=Login'); }

    login ({ email, password }) {
        this.$email.setValue(email);
        this.$password.setValue(password);

        this.$submit.click();
    }
}

module.exports = Login;
