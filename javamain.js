//tähän todolistan javascript koodit//
let addToDoButton = document.getElementById("LisääArtikkeli");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click', function (){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function (){
        toDoContainer.removeChild(paragraph);
    })   
})