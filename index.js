// Villapando, Harold Kim A.
// 2022-07600
// CMSC 100 U2L
// Exercise 3

const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function validatePassword(password1, password2){
    if(password1 === password2){
        if(password1.length >= 8){
            let hasUpperCase = false;
            let hasLowerCase = false;
            let hasNumber = false;

            for (var i of password1){
                if(uppercaseLetters.includes(i)){
                    hasUpperCase = true;
                }
                if(lowercaseLetters.includes(i)){
                    hasLowerCase = true;
                }
                if(numbers.includes(i)){
                    hasNumber = true;
                }
            }

            if(hasUpperCase && hasLowerCase && hasNumber){
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function reversePassword(password){
    var passLength = password.length;
    var reversedPassword = "";

    for(var i = passLength - 1; i >= 0; i--){
        // concatenate each character to the reversedPassword
        reversedPassword += password[i];
    }

    return reversedPassword;
}

function storePassword(name, password1, password2){
    if(validatePassword(password1, password2) === false){
        console.log("Wrong password!");
        return;
    }

    var newPassword = reversePassword(password1);
    const person = {
        name: name,
        password: newPassword
    }

    return person;
    
}

// validatePassword("helloworld", "hello")     // returns false
// validatePassword("hello", "hello")    	  // returns false
// validatePassword("hello1234", "hello1234")  // returns false
// validatePassword("Hello1234", "Hello1234")  // returns true
// validatePassword("HELLO1234", "HELLO1234")  // returns false

console.log(storePassword("Harold", "Hello1234", "Hello1234")) // returns {name: "John", password: "4321olleH"}
