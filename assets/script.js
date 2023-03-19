
var searchEl = document.getElementById("searchBtn")
var textSearchEl = document.getElementById("citySearch")
var forecastTemparature = document.getElementById("fivedayContainer")
var futureDate = document.getElementById("futureDateContainer")
var currentDay = document.querySelector('#currentDay')
var currentTemperature = document.querySelector('#currentTemperature')
var currentDate = document.querySelector('#currentDate')

//current day stuff
var now = Date.now();
var date = new Date (now);
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
const formattedDate = `${month}/${day}/${year}`;



//function for future dates.
function futureDates() {
// Loop through the next five days
for (let i = 0; i < 5; i++) {
  // Calculate the date of the current iteration
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i + 1);

  // Format the date as a string in the format of "MM/DD/YYYY"
  const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  // Create a new list item element
  const listItem = document.createElement("li");

  // Set the text content of the list item to the formatted date string
  listItem.textContent = dateString;

  // Add the list item to the futureDateContainer element
  futureDate.appendChild(listItem);
}
}


// function to get the lat and lon information and to get the current tempature.
 function fiveDayDisplay(lat,lon) {
  var stringer2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' +lat +'&lon=' + lon + '&units=imperial&appid=4fb2c1c17b8775d8bd78a36c089c1827';
  fetch(stringer2)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data) 
    for (let i = 0; i < data.list.length; i++) {
     if(data.list[i].dt_txt.includes("03:00:00")){
      console.log(data.list[i])
      let oneDayCard = document.createElement ("div")
      oneDayCard.innerHTML= data.list[i].main.temp
      forecastTemparature.append(oneDayCard);
     } 
    }
  });
 } 

//function to fetch the result from the API request.
function getApi(stringer) {
  fetch(stringer) 
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    currentTemperature.append(document.createElement ('div').innerHTML=data.main.temp)
    fiveDayDisplay(data.coord.lat,data.coord.lon)
  //appends the current day date.
    currentDate.append(document.createElement ('div').textContent=formattedDate)
    futureDates()
  })
}
// function to put city inside of API
  function locationCity (citySearch) {
    requestLocation = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=imperial&appid=4fb2c1c17b8775d8bd78a36c089c1827';
    console.log(requestLocation);
    getApi(requestLocation)
  }
  searchEl.addEventListener("click", function () {
    citySearch = textSearchEl.value;
    console.log(citySearch)
    locationCity(citySearch)
  });

  //need to work to local storage function
  $(document).ready(function() {
    // Add event listener for search button click
    $('#searchBtn').click(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get search input value
      var searchValue = $('#citySearch').val();
  
      // Save search value to local storage
      localStorage.setItem('cities', searchValue);
      // additional arguments to display on HTML
    
      saveLast5Searches(citySearch); 
       
    });
  });

  function saveLast5Searches(city) {
    // Retrieve the last 5 searches from local storage
    let searches = JSON.parse(localStorage.getItem("last5Searches")) || [];
  
    // Add the new city to the beginning of the array
    searches.unshift(city);
  
    // Make sure we only keep the last 5 searches
    searches = searches.slice(0, 5);
  
    // Save the updated array back to local storage
    localStorage.setItem("last5Searches", JSON.stringify(searches));
  
    // Update the topCityContainer div with the new searches
    $("#topCityContainer").empty();
    searches.forEach((search) => {
      $("#topCityContainer").append(`<div>${search}</div>`);
    });
  }