const num=Math.floor(Math.random()*10)+1;
const p=document.getElementById('guesses');
let guess=null;
while(true){
    guess=prompt('Guess a number between 1 and 10!');
    guess=parseInt(guess);
    if (guess === num){
        p.innerText+=`\n${guess}\nCongrutulations! You got it!`;
        break;
    }else if (guess < num){
        p.innerText+=`\n${guess} was too small.`;
    }else if (guess > num){
        p.innerText+=`\n${guess} was too large.`;
    }
}