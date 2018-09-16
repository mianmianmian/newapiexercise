// Write your Javascript excercises here:
//alert("Howdy")

// Replaces the HTML within the object with id of "demo" with something of our choice.

//document.getElementById("demo").innerHTML = "Hello World"
//
//const newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

//newsTitles.forEach((title) => {
//  articlesDiv.innerHTML += `<h2>${title}</h2>`
//})
//console.log(articlesDiv)
//const person1 = {firstName:"Jennifer", lastName:"Holmberg", age:40, eyeColor:"blue"};
//const person2 = {firstName:"Marie", lastName:"Andersson", age:50, eyeColor:"blue"};
//const person3 = {firstName:"Martina", lastName:"Karlsson", age:45, eyeColor:"blue"};
//const person1Div = document.getElementById("person1")
//const person2Div = document.getElementById("person2")
//const person3Div = document.getElementById("person3")
//person1Div.innerHTML=person1.firstName+" "+person1.lastName+" "+person1.age+" "+person1.eyeColor
//person2Div.innerHTML=person2.firstName+" "+person2.lastName+" "+person2.age+" "+person2.eyeColor
//person3Div.innerHTML=person3.firstName+" "+person3.lastName+" "+person3.age+" "+person3.eyeColor
// Our variables
//const key = "56cac8c2a2f74ff2afc47731f3937d50"
//const url = `https://newsapi.org/v2/everything?q=blockkedja&apiKey=${key}`,
const urlmoon = "http://api.open-notify.org/astros.json"

// Our main function
const recievedmoonNews = (moondata) => {

	// For each article object from the API, we create a new div in HTML.
    moondata.people.forEach((people) => {

					//Here we create and add html elements to our html file
					document.querySelector(".moonNews").innerHTML +=
            `<div class="moon">
            <h2>${people.name}</h2>
            </div>`
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
const fetchMoon = () => {
  fetch(urlmoon)
    .then(response => response.json())
    .then(recievedmoonNews)
}

setTimeout(fetchMoon, 1000);
