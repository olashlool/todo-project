
let person = prompt("Please enter your name ?");

var gender = prompt("Enter your gender ? \nPlease enter (male or female)");

let age = prompt("Please enter your age ?");
while(true){
    if (parseInt(age) > 0){
        break;
    } else{
        alert("Invalid input");
        age = prompt("Please enter your age ?");
    }
}

let message;
    if (confirm("Do you want to skip the welcoming message ?") == true) {
        alert("Good Buy");
    } else {
        if (gender === "Female" || gender === "female")
        {
                alert(`Hello Ms ${person} `)
        }else if (gender === "Male" || gender === "male"){
            alert(`Hello Mr ${person} `)
        }else{
            alert(`Hello ${person} `)
        }
    }




