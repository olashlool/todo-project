
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

let answersArray= [];

function questionYesNo(question){
    let answer;
    for (let i =0 ; i < question.length; i++){
        answer = Answer(prompt(question[i]));
    }
    let print = printArray(answer);
}
function Answer(answerUser){
    answerUser = answerUser.toLowerCase();
    switch(answerUser){
        case 'yes':
            answersArray.push("Yes");
            break;
        case 'no' :
            answersArray.push("No");
            break;
        case '' :
            answersArray.push("Invalid");
            break;
        default:
            break;
    }
    return answersArray;
}
function printArray(arrAnswerUser){
    for (let i =0; i< arrAnswerUser.length; i++)
    {
        console.log(`The element of index ${i} => ${arrAnswerUser[i]}`);
    }
}

questionYesNo(["Q1 : Is he/she busy?" , "Q2 : Would you like to play tennis with me later?","Do you know Amr Diab?"]);