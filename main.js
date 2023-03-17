
const inputB=document.getElementById('inputB')
const butonSearch=document.getElementById('btnB')
const imgIcon=document.getElementById('imgIcon')
const formSubmit=document.getElementById('form')

formSubmit.addEventListener('submit',(event)=>{
  event.preventDefault();
  const location = inputB.value;
  mostrarDatos(location);
})



function obtenerDatos(location){
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f04666531msh476b0c0d08600a1p12042ejsnafd600cb405c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
  
return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`, options)
	.then(response => response.json())
	.then(response => {
    const location={
          city:response.location.name,
          country:response.location.country,
        }
    const current={
      temp:response.current.temp_c,
      icon:response.current.condition.icon,
      condition:response.current.condition.text,
      windSp:response.current.wind_kph
    }
    return{location,current}
    })
  .catch(err => console.error(err));
}
function mostrarDatos(location){
  obtenerDatos(location)
  .then(datos=>{
    let city=datos.location.city
    let country=datos.location.country
    let temp=datos.current.temp
    let condition=datos.current.condition
    let windSp=datos.current.windSp
    let icon=datos.current.icon
    let day_night=datos.current.icon
    day_night=day_night.slice(-11,-8)
    if( day_night=='ght')day_night='night'
    icon=icon.slice(-7,-4)
    document.getElementById('city').innerText=`${city}`
    document.getElementById('country').innerText=`${country}`
    document.getElementById('temp').innerText=`${temp}ºC`
    document.getElementById('Conditions').innerText=`${condition}`
    document.getElementById('windSpeed').innerText=`${windSp} km/h`
    imgIcon.src=`/img/64x64/${day_night}/${icon}.png`

  })
}
  
mostrarDatos();