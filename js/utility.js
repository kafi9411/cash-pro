function hiddenElement(element){
    const home = document.getElementById(element)
    home.classList.add('hidden')
}

function showElement(element){
    const play = document.getElementById(element)
    play.classList.remove('hidden')
}

function randomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const leter = alphabet.split('')

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber); 
    
    const leters =leter[index];
    return leters
}

function setBackGroundColour (element){
    const home = document.getElementById(element)
    home.classList.add('bg-orange-400')
    
}
function removeBackGroundColour (element){
    const home = document.getElementById(element)
    home.classList.remove('bg-orange-400')
    
}



