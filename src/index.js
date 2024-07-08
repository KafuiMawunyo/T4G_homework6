//when the user enters the learn more button on the homepage,
//it takes their name
function promptName(){ 
  let name =  prompt("What is your name?") 
let para = document.getElementById("para");
para.innerHTML = `Welcome ${name} to Afri Food Bank `;
let browse = document.getElementById("browse");
browse.innerHTML = `Hi ${name}, browse through our African Goodies`;
}




let learnmore = document.getElementById("learnmore");
learnmore.addEventListener("mouseenter", promptName);

function alertFruitLink(){
    alert("https://nomadparadise.com/african-fruits/")
}

//added a click event to the fruit image
let fruits = document.getElementById("fruits");
fruits.addEventListener('click', alertFruitLink );

function alertVegetableLink(){
    alert("https://en.wikipedia.org/wiki/Vegetable")
}

//added a click event to the vegetable image
let vegetables = document.getElementById("vegetables");
vegetables.addEventListener("click" , alertVegetableLink);