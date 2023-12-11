function register(input) {
    let n = Number(input.shift())
    
    let pattern = /U[$](?<username>[A-Z]{1}[a-z]{2,})U[$]P@[$](?<password>[A-z]{5,}[0-9]{1,})P@[$]/g

    let match = pattern.exec(input);
    let registrations = 0;

    for (let i = 0; i < n; i++) {
        if (match === null){
            console.log("Invalid username or password");
            continue;
        }
        let usernameMatch = match.groups["username"];
        let passwordMatch = match.groups["password"];

        match = pattern.exec(input);

        if (usernameMatch && passwordMatch) {
            console.log(`Registration was successful`);
            console.log(`Username: ${usernameMatch}, Password: ${passwordMatch}`);
            registrations++;
        }
    }
    console.log(`Successful registrations: ${registrations}`);
}
register((["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"]))
