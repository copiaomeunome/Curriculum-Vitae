let home = document.querySelector('#home'); 
let curriculum = document.querySelector('#curriculum');
let services = document.querySelector('#services');
let head = document.querySelector('#head');

function headerFilter(){
    let option = getSelectedRadio();
    if(option == 1){
        showFlex(home);
        hide(curriculum);
        hide(services);
    }
    else if(option == 2){
        showFlex(curriculum);
        hide(home);
        hide(services);
    }
    else{
        showFlex(services);
        hide(curriculum);
        hide(home);
    }
}

function getSelectedRadio(){
    array = Array.from(document.querySelectorAll('header input[type="radio"]:checked'));
    return Array.from(array).map((array) => array.id).toString();
}

function showFlex(obj) {
    obj.style.display = "flex";
}

let ticking = false;
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
        window.requestAnimationFrame(function() {
            changeColor(lastKnownScrollPosition);
            ticking = false;
        });
  
        ticking = true;
    }
});

function changeColor(pos){
    
    if(pos>100){
        head.style.background = "white";
    }
    else{
        head.style.background = "transparent";
    }
}