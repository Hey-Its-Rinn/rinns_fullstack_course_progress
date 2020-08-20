var roster = [];
var name = ""
var index = NaN

while (true) {
    
    var message = prompt("Type [A]dd to add a name to the roster."+
                        "\nType [R]emove to remove a name from the roster."+
                        "\nType [D]isplay to display the roster"+
                        "\nType [Q]uit to quit.");

    if (message === null) {
        console.log("User cancelled entry.");
        continue;
    }else if(message === ""){
        console.log("User entered an empty string.");
        continue;
    }else{
        console.log("User entered: "+message);  
    }
    
    if (message.toLowerCase() ==="a" || message.toLowerCase() === "add") {
        console.log("User wishes to add a name to the roster.");
        name = prompt("Enter the name you wish to add to the roster: ");
        console.log("User wishes to enter the name \""+name+"\" to the roster.");
        roster.push(name);
        console.log("Added the name \""+name+"\" to the roster.");

    }else if (message.toLowerCase() === "r" || message.toLowerCase() === "remove") {
        console.log("User wishes to remove a name from the roster.");
        name = prompt("Enter the name you wish to remove from the roster: ");
        console.log("User wishes to remove the name \""+name+"\" from the roster.");
        if (roster.includes(name)) {
            index = roster.indexOf(name);
            console.log("Found name at roster index position: "+index);
            roster.splice(index, 1);
            console.log("Removed name \""+name+"\" from roster.");
        } else {
            console.log("Name was not found.");
            alert("Name not found in roster.");
        }

    }else if (message.toLowerCase() === "d" || message.toLowerCase() === "display") {
        console.log("User wishes to display the roster.");
        
        if (roster.length > 0) {
            alert("Here is the current roster: \n" + roster);
        }else{
            alert("The roster is currently empty.");
        }
        console.log("Roster displayed.");

    }else if (message.toLowerCase() === "q" || message.toLowerCase() === "quit") {
        console.log("User wishes to quit.");
        alert("Goodbye.")
        break;

    }else{
        console.log("Not sure what user wants.")
    }

}
