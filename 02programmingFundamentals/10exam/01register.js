function register(array) {
    let username = array.shift();
    let string = ""; // the Reverse method's string variable

    for (let line of array) {
        let [command, token1, token2] = line.split(" ");

        if (command === "Registration") {
            break;
        }
        if (command === "Letters") {
            if (token1 === "Upper") {
                username = username.toUpperCase();
                console.log(username);
            } else if (token1 === "Lower") {
                username = username.toLowerCase();
                console.log(username);
            }
        } else if (command === "Reverse") {
            if (token2 < username.length && token2 >= 0 && token1 < username.length && token1 >= 0)  {
                for (let i = token2; i >= token1; i--) {
                    string += username[i];
                }
                console.log(string);
            } else {
                continue;
            }
        } else if (command === "Substring") {
            if (username.includes(token1)) {
                username = username.replace(token1, "")
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${token1}.`);
            }
        } else if (command === "Replace") {
            if (username.includes(token1))
            for (let i = 0 ; i < username.length; i++){
                if (username[i].includes(token1)){
                    username= username.replace(username[i], "-")        //replace all occurences of string 
                }
            }
            console.log(username);
        } else if (command === "IsValid") {
            if (username.includes(token1)) {
                console.log("Valid username.");
            } else {
                console.log(`${token1} must be contained in your username.`);
            }
        }
    }
}
register(["ThisIsSoftUni",
"Reverse 1 3",
"Replace S",
"Substring hi",
"Registration"])
