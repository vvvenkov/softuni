function passwordValidator(password) {
    let lengthCheck = passWordLength(password);
    let specialCharCheck = specialChar(password);
    let validDigit = numberCount(password);
    printResult(lengthCheck, specialCharCheck, validDigit);

    function passWordLength(password) {
        return password.length >= 6 && password.length <= 10;
    }
    function specialChar(password) {
        for (let ch of password) {
            let char = ch.charCodeAt(0);
            let isLower = checkforLowerCase(char);
            let isUpper = checkforUpperCase(char);
            let isNumber = checkforNumber(char);
            if (!isLower && !isUpper && !isNumber) {
                return false;
            }
        }
        return true;
    }
    function checkforLowerCase(char) {
        return char >= 97 && char <= 122;
    }
    function checkforUpperCase(char) {
        return char >= 65 && char <= 90;
    }
    function checkforNumber(char) {
        return char >= 48 && char <= 57;
    }
    function numberCount(password) {
        let counter = 0;
        for (let ch of password) {
            let num = ch.charCodeAt(0);
            if (num >= 48 && num <= 57) {
                counter++;
            } else {
                continue;
            }
            if (counter === 2) {
                return true;
            }
        }
    }
    function printResult(lengthCheck, specialCharCheck, validDigit) {
        if (!lengthCheck) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!specialCharCheck) {
            console.log("Password must consist only of letters and digits");
        }
        if (!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if (lengthCheck, specialChar, validDigit) {
            console.log("Password is valid");
        }
    }
}
passwordValidator("Pa$s$s")