function solve(password) {

    const isLengthValid = hasValidPasswordLength(password);
    const isContentValid = hasValidPasswordContent(password);
    const isDigitsValid = hasValidPasswordDigits(password);
    printValidationResults();

    function hasValidPasswordLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidPasswordContent(password) {
        const regex = /^[A-Za-z0-9]+$/;
        return regex.test(password);
    }

    function hasValidPasswordDigits(password) {
        const regex = /\d/g;
        const digits = password.match(regex);
        return digits && digits.length >= 2;
    }


    function printValidationResults() {
        if (!isLengthValid) {
            console.log('Password must be between 6 and 10 characters long.');
        }
        if (!isContentValid) {
            console.log('Password can only contain Latin letters and digits.');
        }
        if (!isDigitsValid) {
            console.log('Password must contain at least 2 digits.');
        }
        if (isLengthValid && isContentValid && isDigitsValid) {
            console.log('Password is valid');
        }

    }

}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');