

//declare the variable, an array of flights
//let variables can not be redefined & have block scope.
let flights = []; 

//fetch() method requests to the server and load the information in the webpages. 
//The request can be of any APIs that returns the data of the format JSON or XML.
// This method returns a promise.

//fetch(url) no semi colon after this
//loadData method taking in no arguments 
const loadData = () => {
    fetch("https://api.spacexdata.com/v5/launches")
    //we got back a promise (data on flight)

.then(result => result.json())
//taking the resolved promise(the result from that fetch) and taking the json data from the result.

.then(data => flights = data)
//taking the result.json data ? Our empty array of flights equals the data.

.then (() => { 

//MAKING FLIGHT DETAIL TO APPEAR FROM OUR API TO OUR DOMO 

console.log("Flight details loading ..." );
//taking in no parameters but run everything defined inside of the function when resolved 
const list = document.querySelector("#flight-detail-list")
// declaring a variable called list and searching the document for details on the flight detail list id


//currently our array of flights contains the json data of all the flights, we want to create a new array of just flight details 
// we're gonna store the result of this in flightDetails
// we're doing .map will iretate through each item in the array and allow us to transform each item. 
//the result will be another item with the transformed items.
// inside of .map (each flight(parameter) want to return the details)
//map is taking a callback function 
const flightDetails= flights.map(flight => {
return flight.details;
})
 
// flight details has an array of flight details now 
//we want loop around the array of flight details using for each
//each item is the details
flightDetails.forEach((details) => {

//create a variable to a list in the document 
const listDetails= document.createElement("li")


//add text(details in the array) in the document but attach to the list element created
listDetails.innerText = details; 

//adding the list of flight details at the end of the list in our document 
list.appendChild(listDetails)

})

//we want catch to be called if our promise is rejected & the error to be caught.



//Making a link to an article about the launch appear in our document 
}).then(() => {

    console.log("Flight article link loading ...");
    const list = document.querySelector("#flight-article-link")

    //we want to access the array of flights and use map to transform the items in the array by getting the 
    // flight article links in a new array called articleList
 const articleList = flights.map(flight => {
     return flight.links.article 
 })


//loop around the aritclelist array and for each item (article), we want to :
//create a list element in our document 
//then put in the text of our item (article) as the newly created list
//then append the list to the end of the list we made in our document
 
articleList.forEach((article ) => {

const listArticle = document.createElement("li");

listArticle.innerText = article;

list.appendChild(listArticle)

})



}).then(() => {
 console.log("Date of Flight loading ...");

const list = document.querySelector("#flight-local-date")

const localDateList = flights.map (flight => {
    return flight.date_local})

    localDateList.forEach((date) => {
const listDate = document.createElement("li")
listDate.innerText = date;
list.appendChild(listDate)
})
})

/// Making the dates of the launches appear in our document 

}




//call the function 
loadData()