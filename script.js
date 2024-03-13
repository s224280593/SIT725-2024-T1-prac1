function changeText() {
    let potentialTexts=['monday','Tuesday','wednesday','Thursday','Friday'];
    let randomNumber=getRandomNumber(0,potentialTexts.length-1);
    let textTochangeTo= potentialTexts[randomNumber];
    document.getElementById('header').innerHTML=textTochangeTo;

}
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}