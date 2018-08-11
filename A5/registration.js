
function dbg(errorMessage) {
    console.log(errorMessage);
}

var validateFirstName = function () {

    var firstName = document.getElementById('fname').value.trim();
    var passed = 1; 
    var firstNameError = document.getElementById('fNameError');
    var fieldStatus = document.getElementById('fNameChecked');


    firstNameError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';


    if (!firstName == '') {
        if (!firstName[0].search(/[a-zA-Z]/)) {
      
            if (/^[A-Za-z'-]+$/.test(firstName) || /^[A-Za-z]+$/.test(firstName)) {
                firstNameError.innerHTML = '';
                fieldStatus.innerHTML = '&#10004;';
                fieldStatus.className = 'fieldStatusNoError';
                passed = 0;
                return true;
            }
           
            if (passed != 0) {
                firstNameError.innerHTML = 'Only alphabetic characters are allowed';
                fieldStatus.innerHTML = '&#x2716;';
                fieldStatus.className = 'fieldStatusError';
                return false;
            }
            return false;
        } else {
            firstNameError.innerHTML = 'This field must include and start with at least one alphabetic character';
            fieldStatus.innerHTML = '&#x2716;';
            fieldStatus.className = 'fieldStatusError';
            return false;
        }
    }

    return false;
};




var validateLastName = function () {
    var lastName = document.getElementById('lname').value.trim();
    var passed = 1; 
    var lastNameError = document.getElementById('lNameError');
    var fieldStatus = document.getElementById('lNameChecked');


    lastNameError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';

    if (!lastName == '') {
        if (!lastName[0].search(/[a-zA-Z]/)) {
            if (/^[A-Za-z'-]+$/.test(lastName) || /^[A-Za-z]+$/.test(lastName)) {
                lastNameError.innerHTML = '';
                fieldStatus.innerHTML = '&#10004;';
                fieldStatus.className = 'fieldStatusNoError';
                passed = 0;
                return true;
            }

            if (passed != 0) {
                lastNameError.innerHTML = 'Only alphabetic characters are allowed';
                fieldStatus.innerHTML = '&#x2716;';
                fieldStatus.className = 'fieldStatusError';
                return false;
            }
        } else {

            lastNameError.innerHTML = 'This field must include and start with at least one alphabetic character';
            fieldStatus.innerHTML = '&#x2716;';
            fieldStatus.className = 'fieldStatusError';
            return false;
        }
    }

    return false;
};


function validatePassword() {
    var password = document.getElementById('password').value.trim();
    var passwordError = document.getElementById('passError');
    var fieldStatus = document.getElementById('passChecked');

    passwordError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';


    if (!password == '') {

        if (password.length >= 8) {
            if (password.search(/[a-z]/) >= 0) {

                if (password.search(/[A-Z]/) >= 0) {

                    if (password.search(/[0-9]/) >= 0) {
                        passwordError.innerHTML = '';
                        fieldStatus.innerHTML = '&#10004;';
                        fieldStatus.className = 'fieldStatusNoError';
                        return true;
                    }
                    else {
                        passwordError.innerHTML = 'Password must include at least one digit number';
                        fieldStatus.innerHTML = '&#x2716;';
                        fieldStatus.className = 'fieldStatusError';
                        return false;
                    }

                }
                else {
                    passwordError.innerHTML = 'Password must include at least one upper case character';
                    fieldStatus.innerHTML = '&#x2716;';
                    fieldStatus.className = 'fieldStatusError';
                    return false;
                }

            } 
            else {
                passwordError.innerHTML = 'Password must include at least one lower case character';
                fieldStatus.innerHTML = '&#x2716;';
                fieldStatus.className = 'fieldStatusError';
                return false;
            }
        }
        else {
            passwordError.innerHTML = 'Password must be longer than 8 characters';
            fieldStatus.innerHTML = '&#x2716;';
            fieldStatus.className = 'fieldStatusError';
            return false;
        }
    }

    return false;

}

function validateRePassword() {
    var password = document.getElementById('password').value.trim();
    var passwordRe = document.getElementById('repassword').value.trim();
    var passwordErrorRe = document.getElementById('passErrorRe');
    var fieldStatus = document.getElementById('repassChecked');

    passwordErrorRe.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';

    if (!passwordRe == '') {
        if (passwordRe == password) {
            passwordErrorRe.innerHTML = '';
            fieldStatus.innerHTML = '&#10004;';
            fieldStatus.className = 'fieldStatusNoError';
            return true;
        } else {
            passwordErrorRe.innerHTML = 'Passwords do not match';
            fieldStatus.innerHTML = '&#x2716;';
            fieldStatus.className = 'fieldStatusError';
            return false;
        }

    } else {
        passwordErrorRe.innerHTML = '';
        fieldStatus.innerHTML = '';
        fieldStatus.className = 'fieldStatusEmpty';
        return false;
    }
}

function PhoneNumber() {


    var phoneNumber = document.getElementById('phone').value;
    var pnAreaCode = phoneNumber.substr(0, 3);
    var pnThreeDigitPart = phoneNumber.substr(4, 3);
    var pnFourDigitPart = phoneNumber.substr(8, 4);
    var firstHyphen = phoneNumber.substr(3, 1);
    var secondHyphen = phoneNumber.substr(7, 1);
    var phoneError = document.getElementById('pError');
    var fieldStatus = document.getElementById('telChecked');

    phoneError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';


    if (!phoneNumber == '') {
 
        if (phoneNumber.length == 12) {

            if (/^[0-9-]+$/.test(phoneNumber)) {
            
                if (firstHyphen == '-' && secondHyphen == '-') {
                   
                    if (pnAreaCode > 0 && pnAreaCode <= 999) {
                    
                        if (pnAreaCode == 0) {
                            phoneError.innerHTML = 'phone number area code can not be 0s';
                            fieldStatus.innerHTML = '&#x2716;';
                            fieldStatus.className = 'fieldStatusError';
                            return false;
                        }
                        if (pnThreeDigitPart + pnFourDigitPart == 0) {
                            phoneError.innerHTML = 'phone number can not be 0s';
                            fieldStatus.innerHTML = '&#x2716;';
                            fieldStatus.className = 'fieldStatusError';
                            return false;
                        } else {
                            phoneError.innerHTML = '';
                            fieldStatus.innerHTML = '&#10004;';
                            fieldStatus.className = 'fieldStatusNoError';
                            return true;
                        }

                    }
                    else {
                       ;
                        phoneError.innerHTML = 'Your phone number area code must be numbers from 001 to 999';
                        fieldStatus.innerHTML = '&#x2716;';
                        fieldStatus.className = 'fieldStatusError';
                    }
                    return false;
                } else {
                   ;
                    phoneError.innerHTML = 'phone number must be in the following format 999-999-9999';
                    fieldStatus.innerHTML = '&#x2716;';
                    fieldStatus.className = 'fieldStatusError';
                    return false;
                }
            } else {
                
                phoneError.innerHTML = 'phone number numbers can not have characters and special symbols';
                fieldStatus.innerHTML = '&#x2716;';
                fieldStatus.className = 'fieldStatusError';
                return false;
            }
        }




        else {
            phoneError.innerHTML = 'phone number must have 10 digits';
            fieldStatus.innerHTML = '&#x2716;';
            fieldStatus.className = 'fieldStatusError';
            return false;
        }
    }
    else {
        return false;
    }
}



//
function validateForm() {
    dbg('Functions\n' + 'validateFirstName()' + validateFirstName());
    dbg('validateLastName()' + validateLastName());
    dbg('PhoneNumber()' + PhoneNumber());
    dbg('validatePassword()' + validatePassword());
    dbg('validateRePassword()' + validateRePassword());
    


    if (validateFirstName() && validateLastName() && PhoneNumber() && validatePassword() && validateRePassword()) {
        return true;
    }
    else {
        return false;
    }
}

var clearForm = function () {

    var firstNameError = document.getElementById('fNameError');
    var fieldStatus = document.getElementById('fNameChecked');


    firstNameError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';



    var lastNameError = document.getElementById('lNameError');
    fieldStatus = document.getElementById('lNameChecked');

    lastNameError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';

    var passwordError = document.getElementById('passError');
    fieldStatus = document.getElementById('passChecked');

    passwordError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';

    var passwordErrorRe = document.getElementById('passErrorRe');
    fieldStatus = document.getElementById('repassChecked');

    passwordErrorRe.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';

    var phoneError = document.getElementById('pError');
    fieldStatus = document.getElementById('telChecked');
    phoneError.innerHTML = '';
    fieldStatus.innerHTML = '';
    fieldStatus.className = 'fieldStatusEmpty';


    estatusError.innerHTML = '';

};
