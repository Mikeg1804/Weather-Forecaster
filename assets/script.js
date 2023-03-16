
var searchEl = document.getElementById("searchBtn")
var textSearchEl = document.getElementById("citySearch")
var forecastTemparature = document.getElementById("fivedayContainer")
var currentDay = document.querySelector('#currentDay')
var currentTemperature = document.querySelector('#currentTemperature')

//var requestUrl = 'api.openweathermap.org/data/2.5/forecast?&appid=4fb2c1c17b8775d8bd78a36c089c1827';
 function fiveDayDisplay(lat,lon) {
  var stringer2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' +lat +'&lon=' + lon + '&appid=4fb2c1c17b8775d8bd78a36c089c1827';
  fetch(stringer2)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data) 
    for (let i = 0; i < data.list.length; i++) {
     if(data.list[i].dt_txt.includes("03:00:00")){
      console.log(data.list[i])
      let oneDayCard = document.createElement ("div")
      oneDayCard.innerHTML= data.list[i].main.temp
      forecastTemparature.append(oneDayCard)
     } 
     else(
     currentTemperature.append(document.createElement ('div').innerHTML=data.list[i].main.temp)
     )
    }
  });
 } 


 
// var citySearch;

// searchEl.addEventListener("click",function(){
//   citySearch = textSearchEl.value;
//   // console.log(citySearch)
//     });

// // console.log(citySearch)    

// function requestLocation(citySearch) {
//   var requestLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' + citySearch + '&limit=4fb2c1c17b8775d8bd78a36c089c1827';
//   console.log(requestLocation);
//   }

//function to fetch the result from the API request.
function getApi(stringer) {
  fetch(stringer) 
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    fiveDayDisplay(data.coord.lat,data.coord.lon)
  })
}
// function to put city inside of API
  function locationCity (citySearch) {
    requestLocation = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=4fb2c1c17b8775d8bd78a36c089c1827';
    console.log(requestLocation);
    getApi(requestLocation)
  }
  searchEl.addEventListener("click", function () {
    citySearch = textSearchEl.value;
    console.log(citySearch)
    locationCity(citySearch)
  });



  // function getApi(requestUrl) {
  //   fetch(requestUrl) 
  //     .then(function (response) {
  //       console.log(response)
  //       return response.json()
  //   });
  // }


// rootEl.append(html)
// //Event Bubbling
// searchEl.on("click","searchBtn",function(){
//   var userDayPlan = $(this).siblings("textarea").val()
//   var id = $(this).parent().attr("id")
//   localStorage.setItem(id,userDayPlan)
// })