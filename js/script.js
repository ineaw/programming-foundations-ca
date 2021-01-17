// Question 1

// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

// Answer

var outOfStock = true;

if (outOfStock === true) {
   console.log ("Out of stock");
} else {
    console.log ("In stock");
}



//Question 2

//Create a for loop that counts from 15 to 25. 
//Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

// Answer


for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
    console.log(i);
}
}


// Question 3

// Loop through the array below and add an li item to the ul element in the HTML 
// containing the title and rating of each game only if the rating for the game is below 3.5.

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gameContainer = document.querySelector(".games")

for (var i = 0; i < games.length; i++) {
   var title = games[i].title;
	var rating = games[i].rating;
    if (rating < 3.5)  {
	 gameContainer.innerHTML += "<ul><li>" + title + "</li></ul>";
	}
}



// Question 4

// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// Inside the function, check if the argument has a string value. If it doesn't log the message "Please send in a string".
// If the argument is a string value, log the message "I don't like " together with the argument.
// Call the function and pass in a value of your choice.
// Example:
// If you pass in the value "giraffes", the function should log: "I don't like giraffes".

// Answer
whatIDontLike = "snow";

function checkWhatIDontlike(whatIDontLike) {
	if (typeof whatIDontLike !== "string") {
		console.log("please send a string");
	} else {
		console.log("I don`t like" + " " + whatIDontLike);
	}
}

checkWhatIDontlike("snow");


// Question 5

// Create a function that accepts two arguments.
// Inside the function, try to convert the arguments to numbers.
// If either of the arguments cannot be converted to a number, return the value: "Invalid argument(s)".
// If both arguments are number values or can be converted to number values, subtract the second argument from the first and return the result from the function.
// Call the function, pass in to two values and assign the return value to be the innerHTML value of the element with the id subtraction.


// Answer
function addValues(apples, pears) {
   var convertedValue1 = typeof apples;
   var convertedValue2 = typeof pears;
   if (convertedValue1 !== "number" || convertedValue2 !== "number") {
        return "Invalid arguments";
	}
	return convertedValue1 - convertedValue2;
}

var subtractId = document.querySelector("#subtraction");

 var result = addValues("apples", "pears");

 subtractId.innerHTML = result;

console.log(result);


// Question 6

// Select the button with the class page.

// When the button is clicked do the following:
    //Change the title of the page (the value of the title element in the head) to "Updated title".	
    //Change the background colour of the whole page to "yellow".
    //Change the color of the h1 element to "green".
    //Change the h1 element's font to "impact".
    //Change the value of the h1 element to be a link.
    //Remove the list style and padding from the ul element.
// The h1 element should look like this after the click event:
// <h1><a href="#">Programming Foundations Course Assignment</a></h1>

var headTitle = document.querySelector("title");
var body = document.querySelector("body");
var buttonPage = document.querySelector(".page");
var heading = document.querySelector("h1");
var list = document.querySelector("ul");

function changeElements() {
headTitle.innerHTML = "Updated title"
body.style.backgroundColor = "yellow";
heading.style.color = "green";
heading.style.fontFamily = "impact";
list.style.padding = "none";
list.style.listStyleType = "none";
heading.innerHTML = `<a href="#">Programming Foundations Course Assignment</a>`;
}

buttonPage.onclick = changeElements;



// Question 7

// Select the button with the class price.
// When the button is clicked, loop through the array below, 
// add all the prices and assign the total to be the 
// innerHTML value of the element with the id total.

// Answer - I got stuck and probably overthought it and I just could not solve this one, unfortuntately.
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

var buttonPrice = document.querySelector(".price")
var toyContainer = document.querySelector("div")
var totalPrice = document.querySelector("#total");


buttonPrice.onclick = function totalPrice() {
for (var i = 0; i < toys.length; i++) {
	var sum = 0;
	var totalPrice = toys[i].price;
	if (!Number.isNaN(parseFloat(toys[i].price))) {
		parseFloat + toys[i].price;
	   }
	   sum += + toys[i].price;
	toyContainer.innerHTML +=  `<div class="total">` + totalPrice + `</div>`;
	}
}



