
var searchEl = document.getElementById("searchBtn")
var textSearchEl = document.getElementById("citySearch")

var requestUrl = 'api.openweathermap.org/data/2.5/forecast?&appid=4fb2c1c17b8775d8bd78a36c089c1827';
// var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat=' +lat +'&lon=' + lon + '&appid=4fb2c1c17b8775d8bd78a36c089c1827';



let citySearch = searchEl.addEventListener("click",function(){
  console.log(textSearchEl.value)
 return textSearchEl.value

    })

console.log(citySearch)    

var requestLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' +citySearch+ '&limit=4fb2c1c17b8775d8bd78a36c089c1827';

console.log(requestLocation)

function getApi(requestLocation) {
    fetch(requestLocation) 
      .then(function (response) {
        console.log(response)
        return response.json();
    });
  }




// rootEl.append(html)
// //Event Bubbling
// searchEl.on("click","searchBtn",function(){
//   var userDayPlan = $(this).siblings("textarea").val()
//   var id = $(this).parent().attr("id")
//   localStorage.setItem(id,userDayPlan)
// })