var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var country = document.querySelector('.country');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var date= document.querySelector('.date');
var date2= document.querySelector('.date2');
var cur_btn= document.querySelector('.cur_btn');
var all= document.querySelector('.all');
var icon= document.querySelector('.icon');
var badge= document.querySelector('.badge');
var d_sec= document.querySelector('.d_sec');
var haze = "Haze";
var rain = "Rain";
var cloud = "Clouds";
var clear = "Clear";
var snow = "Snow";
var thunderstorm = "Thunderstorm";
var info_btn = document.querySelector('.info_btn');
var city = document.querySelector('.city');
var country_name = document.querySelector('.country_name');
var temparature = document.querySelector('.temparature');
var humidity = document.querySelector('.humidity');
var wind_speed = document.querySelector('.wind_speed');
var weather = document.querySelector('.weather');
var weather_desc = document.querySelector('.weather_desc');
$(badge).hide();
// $(document).ready(function(){
  
// });
$(d_sec).click(function(){
  $(badge).show();
});


//Default weather
fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=56d3d49273f5d153c2892396147f09bd')
	.then(response => response.json())
	.then(data => {

		
		var timeValue = data['timezone'];
		var d = new Date();
    	var utc_offset = d.getTimezoneOffset();
    	d.setMinutes(d.getMinutes() + utc_offset);
    	var new_time = (timeValue/3600)*60;
    	d.setMinutes(d.getMinutes() + new_time);
    	date2.innerHTML ="Stander Time\xa0" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "(GMT+0600)";
    	
	  
	  var nameValue = data['name'];
	  var countryValue = data['sys']['country'];
	  var tempValue = data['main']['temp'];
	  var windValue = data['wind']['speed'];
	  var descValue = data['weather'][0]['description'];
	  var cloudsValue = data['clouds']['all'];
	  var weatherValue = data['weather'][0]['main'];

	  if (weatherValue==haze) {
	  	icon.innerHTML = "<img src='images/icons/haze.svg'  width=90>";
	  } else if (weatherValue==rain) {
	  	icon.innerHTML = "<img src='images/icons/rain2.svg'  width=90>";
	  } else if (weatherValue==cloud) {
	  	icon.innerHTML = "<img src='images/icons/cloudy.svg'  width=90>";
	  } else if (weatherValue==clear) {
	  	icon.innerHTML = "<img src='images/icons/clear.svg'  width=90>";
	  } else if (weatherValue==snow) {
	  	icon.innerHTML = "<img src='images/icons/snow.svg'  width=90>";
	  } else if (weatherValue==thunderstorm) {
	  	icon.innerHTML = "<img src='images/icons/thunderstorm.svg'  width=90>";
	  } else {
	  	icon.innerHTML = "<img src='images/icons/all.svg'  width=90>";
	  }

	  main.innerHTML = nameValue;
	  country.innerHTML = countryValue;
	  wind.innerHTML = Math.round(windValue*3.6)+"km/h";
	  clouds.innerHTML = cloudsValue+"%";

	  desc.innerHTML = "Condition - "+descValue;
	  temp.innerHTML = Math.round(tempValue-272.15);
	  

	})

//location based weather
button.addEventListener('click', function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=56d3d49273f5d153c2892396147f09bd')
	.then(response => response.json())
	.then(data => {

		
		var timeValue = data['timezone'];
		var d = new Date();
    	var utc_offset = d.getTimezoneOffset();
    	d.setMinutes(d.getMinutes() + utc_offset);
    	var new_time = (timeValue/3600)*60;
    	d.setMinutes(d.getMinutes() + new_time);
    	date2.innerHTML ="Stander Time\xa0" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "(GMT+0600)";
    	
	  
	  var nameValue = data['name'];
	  var countryValue = data['sys']['country'];
	  var tempValue = data['main']['temp'];
	  var windValue = data['wind']['speed'];
	  var descValue = data['weather'][0]['description'];
	  var cloudsValue = data['clouds']['all'];
	  var weatherValue = data['weather'][0]['main'];

	  if (weatherValue==haze) {
	  	icon.innerHTML = "<img src='images/icons/haze.svg'  width=90>";
	  } else if (weatherValue==rain) {
	  	icon.innerHTML = "<img src='images/icons/rain2.svg'  width=90>";
	  } else if (weatherValue==cloud) {
	  	icon.innerHTML = "<img src='images/icons/cloudy.svg'  width=90>";
	  } else if (weatherValue==clear) {
	  	icon.innerHTML = "<img src='images/icons/clear.svg'  width=90>";
	  } else if (weatherValue==snow) {
	  	icon.innerHTML = "<img src='images/icons/snow.svg'  width=90>";
	  } else if (weatherValue==thunderstorm) {
	  	icon.innerHTML = "<img src='images/icons/thunderstorm.svg'  width=90>";
	  } else {
	  	icon.innerHTML = "<img src='images/icons/all.svg'  width=90>";
	  }

	  main.innerHTML = nameValue;
	  country.innerHTML = countryValue;
	  wind.innerHTML = Math.round(windValue*3.6)+"km/h";
	  clouds.innerHTML = cloudsValue+"%";

	  desc.innerHTML = "Condition - "+descValue;
	  temp.innerHTML = Math.round(tempValue-272.15);
	  input.value ="";

	})
	.catch(err => alert("Wrong city name!"));
})


//current location weather
cur_btn.addEventListener('click', function(){
	navigator.geolocation.getCurrentPosition(function( position ){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude

		fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat.value+'&lon='+lon.value+'&appid=56d3d49273f5d153c2892396147f09bd')
		.then(response => response.json())
		.then(data => {
		var timeValue = data['timezone'];
		var d = new Date();
    	var utc_offset = d.getTimezoneOffset();
    	d.setMinutes(d.getMinutes() + utc_offset);
    	var new_time = (timeValue/3600)*60;
    	d.setMinutes(d.getMinutes() + new_time);
    	date2.innerHTML ="Stander Time" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "(GMT+0600)";
    		  
	  var nameValue = data['name'];
	  var countryValue = data['sys']['country'];
	  var tempValue = data['main']['temp'];
	  var windValue = data['wind']['speed'];
	  var descValue = data['weather'][0]['description'];
	  var cloudsValue = data['clouds']['all'];
	  var weatherValue = data['weather'][0]['main'];

	  if (weatherValue==haze) {
	  	icon.innerHTML = "<img src='images/icons/haze.svg'  width=90>";
	  } else if (weatherValue==rain) {
	  	icon.innerHTML = "<img src='images/icons/rain2.svg'  width=90>";
	  } else if (weatherValue==cloud) {
	  	icon.innerHTML = "<img src='images/icons/cloudy.svg'  width=90>";
	  } else if (weatherValue==clear) {
	  	icon.innerHTML = "<img src='images/icons/clear.svg'  width=90>";
	  } else if (weatherValue==snow) {
	  	icon.innerHTML = "<img src='images/icons/snow.svg'  width=90>";
	  } else if (weatherValue==thunderstorm) {
	  	icon.innerHTML = "<img src='images/icons/thunderstorm.svg'  width=90>";
	  } else {
	  	icon.innerHTML = "<img src='images/icons/all.svg'  width=90>";
	  }

	  main.innerHTML = nameValue;
	  country.innerHTML = countryValue;
	  wind.innerHTML = Math.round(windValue*3.6)+"km/h";
	  clouds.innerHTML = cloudsValue+"%";

	  desc.innerHTML = "Condition - "+descValue;
	  temp.innerHTML = Math.round(tempValue-272.15);
	  input.value ="";

		})
		.catch(err => alert("Wrong city name!"));
	});

})


//current time
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
date.innerHTML = days[d.getDay()] + " , " +d.getDate();


//download info as excel

info_btn.addEventListener('click', function(){
	var info = document.querySelector('.info');
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+info.value+'&appid=56d3d49273f5d153c2892396147f09bd')
	.then(response => response.json())
	.then(data => {

	
	var city_value = data['name'];
	var country_name_value = data['sys']['country'];
	var temparature_value = data['main']['temp'];
	var humidity_value = data['main']['humidity'];
	var wind_speed_value = data['wind']['speed'];
	var weather_value = data['weather'][0]['main'];
	var weather_desc_value = data['weather'][0]['description'];
	$(badge).show();

	city.innerHTML = city_value;
	country_name.innerHTML = country_name_value;
	temparature.innerHTML = Math.round(temparature_value-272.15) ;
	humidity.innerHTML = humidity_value;
	wind_speed.innerHTML = Math.round(wind_speed_value*3.6)+"km/h";
	weather.innerHTML = weather_value;
	weather_desc.innerHTML = weather_desc_value;
	info.value ="";

	})
	.catch(err => alert("Wrong city name!"));
})