let max  = prompt("enter the max value");
let random  = Math.floor(Math.random()*max+1);
// alert(random);
let guess = prompt("Enter the number according to your choice");
while(true){
    if(guess == "quite"){
        comsole.log("quite");
        break;
    }
    else if(guess == random){
        console.log("you gessed right ,congrats:",random);
        break
    }
    else if(guess < random){
        
        guess = prompt(" the number you guessed is too much small:again guess the number");
    }
    else{
       
        guess = prompt("the number you guessed is too much larg:again guess the number");
    }
    }
