function roll(){
    const numofdice =document.getElementById("dicecount").value;
    const result = document.getElementById("result1");
    const dice = document.getElementById("dice1");
    const values = [];
    const images = [];
    for (let i=0 ; i<numofdice ; i++){
        const randice = Math.floor(Math.random() * 6) + 1;
        values.push(randice);
        images.push(`<img src="Dice_images/${randice}.png" alt="dice ${randice}">`);
    }
    result.textContent= `dice: ${values.join(', ')}`;
    dice.innerHTML=images.join('');
}