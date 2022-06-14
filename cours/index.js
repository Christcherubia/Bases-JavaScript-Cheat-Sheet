// SELECTEURS

// document.querySelector('h4').style.background="yellow"; // tout les attribut CSS peuvent être insérer ici !
// const baliseHTMLh4 = document.querySelector('h4');
// console.log(baliseHTMLh4);
// baliseHTMLh4.style.background = "red";

// Click Events
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');



console.log(btn1, btn2);

questionContainer.addEventListener("click", () => { // c'est comme ça que l'on écrit un evenement
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
   response.classList.add('show-response');
   response.style.background = "green";
   
});

btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "red";
});
// En CSS la <div> (si on écrit dedans) est supérieur à l'#id > la .classe > les balisesHTML 
//attention quand on veut injecter dans le JS 

//----------------------------------------------------------------
//MOUSE Events

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    
});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)"
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "black";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
})

//----------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

document.addEventListener('keypress', (e) => {
    console.log(e.key);
});
