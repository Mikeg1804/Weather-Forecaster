
var searchEl = document.getElementById("searchBtn")
var textSearchEl = document.getElementById("citySearch")
var forecastTemparature = document.getElementById("fivedayContainer")
var futureDate = document.getElementById("futureDateContainer")
var currentDay = document.querySelector('#currentDay')
var currentTemperature = document.querySelector('#currentTemperature')
var currentDate = document.querySelector('#currentDate')


//var requestUrl = 'api.openweathermap.org/data/2.5/forecast?&appid=4fb2c1c17b8775d8bd78a36c089c1827';
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
      // need to fix code below.
      futureDate.append(document.createElement('div').innerHTML=data.list[i].dt_txt);
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
  //wrong date is being shown
    currentDate.append(document.createElement ('div').innerHTML=dayjs())
    35

    // wrond date is being shown
    const date = new Date();
    const today = date.getDate()
    console.log(today.toDateString())
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



