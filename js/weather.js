//https://openweathermap.org/api
const API_KEY = "267df4ac21b8d74ad46a14d12f3fcb73";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
   alert('Cant find you. No weather info for you'); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat=37.5043024&lon=126.7143415&appid=267df4ac21b8d74ad46a14d12f3fcb73