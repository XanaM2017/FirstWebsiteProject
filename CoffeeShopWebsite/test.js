// running this JavaScript as a "function" so that it runs this code when we indicate it to; look at the Button code on Menu HTML
function changeCoffeePrice() {
    // Note: this is JavaScript. 

    // "alert" is a pop up like an error message; "prompt" is a question that has the user put something in
    //var is use to store info, on the left side. You can decide what the variable is called (i.e. header, price); after equal side is what's getting stored
    // alert example: alert(header.innerHTML)

    // this is getting the header "Menu", to be replace later with our pageName
    var header = document.getElementById("testMenu");
    // 1. ask the user question -->store in variable
    var pageName = prompt("What would you like the webpage to be called?");
    // 2. set the header's innerhtml to the users response
    header.innerHTML = pageName;

    // new test: ask the user what they want the Espress $$ to be, then edit that in the table
    var price = document.getElementById("espressoPrice");
    var drinkPrice = prompt("What would you like the price of Espresso to be");
    price.innerHTML = drinkPrice;
}
