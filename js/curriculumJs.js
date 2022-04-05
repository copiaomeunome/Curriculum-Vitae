let cards = document.querySelectorAll(".card");
let checkedBox;
let cardsNames;

function cardFilter(){
    checkedBox = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((chkBx) => chkBx.name);
    cardsNames = Array.from(cards).map((cards) => cards.id);
    console.log(checkedBox);
    for(let i=0; i<cards.length; i++){
        let currentCard = 1;
        for(let j=0; j<checkedBox.length; j++){
            currentCard = checkedBox[j] == cardsNames[i] ? 1 : 0;
            j = currentCard == 1 ? checkedBox.length : j;
        }
        if(currentCard == 1){
            show(cards[i]);
        }
        else{
            hide(cards[i]);
        }
    }
}

function hide(obj) {
    obj.style.display = "none";
}

function show(obj) {
    obj.style.display = "block";
}

let closeButtons = document.querySelectorAll(".close");
function decreases(i){
    cards[i].parentElement.classList.remove("big");
    hide(closeButtons[i]);
}
function grow(i){
    cards[i].parentElement.classList.add("big");
    closeButtons[i].style.display = "inline";
}
