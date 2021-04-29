var wind = document.getElementById('wind')
var weather = document.getElementById('weatherDesc')
var humidity = document.getElementById('humidity')
var city = document.querySelector('.city')
var btn = document.querySelector('.search_btn')
var temp = document.querySelector('#temp')


btn.addEventListener('click', ()=>{
  if(city.value){
    const cityName = city.value    
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid=43cf8eb4bd5a244c489d23c34248fdd9'
    fetch(weatherUrl,
    {
      method: 'GET'
    })
    .then((response)=> {     
      return response.json();      
    })
    .then((weatherJson) =>{
      console.log(weatherJson)
      cityname.innerText = 'Cityname: ' + weatherJson.name;
      weather.innerText = 'Weather: ' + weatherJson.weather[0].main;
      wind.innerText = 'Wind: ' + weatherJson.wind.speed;
      humidity.innerText = 'Humidity: '+ weatherJson.main.humidity;
      temp.innerText = 'Temperture: '+ weatherJson.main.temp + ' K';
      temp.addEventListener('click',()=>{
        temp.innerText = 'Temperture: '+ (weatherJson.main.temp -273.15).toFixed(2) + ' ℃ ';
      })
    })
    .catch((err)=>{
      alert(err)
    })
  }else{
    alert('we need a city name')
  } 
})


