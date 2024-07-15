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

//adding a load more feature//
function loadMore(){
    let see = document.getElementById("pictures"); //selecting the div you want to show
    // see.style.display = "block";
    see.style.display = "flex";
    see.style.flexWrap = "wrap";
    line.style.display ="none";
}

let line = document.getElementById("line"); //selects the button w/ id line
line.addEventListener("click", loadMore );

// function dropdown() {
//     let food = document.getElementById("maize");
//     food.style.display = "hidden";
    
// }


// let food = document.getElementById("maize");
// food.addEventListener("click" , dropdown);

