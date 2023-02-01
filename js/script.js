const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a525bf3d46msh414b202c73c47fep1a595bjsn237e6d934344',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



var searchbtn = document.getElementById('searchcitybtn');
var showcity = document.getElementById('showcity');
var searchfield = document.getElementById('searchcity');
var city = '';
var formtag = document.getElementById('formtag');
var parentcontainer1 = document.getElementsByClassName('parent1container')

var temp1 = document.getElementById('temp');
var mintemp = document.getElementById('mintemp');
var feels_like1 =document.getElementById('feellike');
var humidity1 = document.getElementById('humidity');
var maxtemp = document.getElementById('maxtemp');
 var winddegrees =document.getElementById('winddirection')
var windspeed =document.getElementById('windspeed')
var sunrise1 = document.getElementById('sunrise');

var feels_like 
var humidity 
var sunrise 
var temp 
var wind_degrees 
var wind_speed 


// parentcontainer1[0].style.backgroundImage = 'url(images/cloudy.jpg)';

// setInterval(()=>
// {
//  setTimeout(()=>{
//      setTimeout(()=>
//       {
//         parentcontainer1[0].style.backgroundImage = 'url(images/cloudy2.jpg)';
//       },2000)
//       parentcontainer1[0].style.backgroundImage = 'url(images/cloudy.jpg)';
//  },2000)
// }, 4000)





searchbtn.addEventListener('click', ($event) => {
    $event.preventDefault();    
    city = searchfield.value;
    showcity.innerHTML = `<h1> Weather for ${city} </h1>`;
    formtag.reset();

var url ='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
fetch(url, options)
    .then(response => response.json())
    .then((response) => {
        feels_like = response.feels_like;
        // max_temp = response.max_temp
        // min_temp = response.min_temp
        humidity = response.humidity
        sunrise = response.sunrise
        // sunset = response.sunset
        temp = response.temp
        wind_degrees = response.wind_degrees
        wind_speed = response.wind_speed
        console.log(response);

    }).then(()=>
    {
        var sun_rise1 = sunrise %100000;
        
//To convert from unix date timestamp to ist time 

        var myDate = new Date(sunrise*1000);
        var sunrisefinal = myDate.toGMTString()+"<br>"+myDate.toLocaleString();
        var sun_rise = sunrisefinal.slice(43);  

        temp1.innerHTML = `${temp}<sup>o</sup>C`;
        feels_like1.innerHTML = `Feels like: ${feels_like}<sup>o</sup>C`;
        
        humidity1.innerHTML = `${humidity} %`;
        sunrise1.innerHTML = `Sunrise at : ${sun_rise}`;

         windspeed.innerHTML  = `${wind_speed} km/hr`;
         winddegrees.innerHTML = `Wind direction: ${wind_degrees} <sup>o<sup>` ;
    })
    .catch(err => console.error(err));
})




