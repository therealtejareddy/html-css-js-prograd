import './style.css'
import {getEightDayReport, getTodayReport, getTodayWeather, getGeoLocation} from  './utils'

let cityList = document.querySelector("#cityList");
let cityName = document.querySelector("#cityName");
let todayDate = document.querySelector("#todayDate");
let mainDetail = document.querySelector("#mainDetail");
let todayTemp = document.querySelector("#todayTemp")
let todayFeels = document.querySelector("#todayFeels")
let todayMin = document.querySelector("#todayMin")
let todayMax = document.querySelector("#todayMax")
let hrsRepost = document.querySelector("#hrsRepost")
let eightDaysForecast = document.querySelector("#eightDaysForecast")
let mainImg = document.querySelector("#mainImg")
let mainTemp = document.querySelector("#mainTemp")

todayDate.textContent = new Date().toLocaleDateString()

cityList.addEventListener('change', async (e) => {
    hrsRepost.innerHTML = ''
    eightDaysForecast.innerHTML = ''
    console.log(e.target.value);
    cityName.innerText = e.target.value
    let locationCoord = await getGeoLocation(e.target.value);
    let weatherData = await getTodayWeather(locationCoord);
    let fiveDayReport = await getEightDayReport(locationCoord)
    console.log(fiveDayReport.daily);
    fiveDayReport.daily.forEach(data => {
        let imgname = data.weather[0].description
        let ddate = data.dt+'000';
            let htmlinner = `
        <div class="flex justify-between items-center">
			<span class="font-semibold text-lg w-1/4">${new Date(parseInt(ddate)).toLocaleDateString()==new Date().toLocaleDateString() ? "Today": new Date(parseInt(ddate)).toLocaleDateString()}</span>
			<img class="h-12 w-12 fill-current w-1/4" src='./wicons/animated/${imgname}.svg'>
			<span class="font-semibold text-lg w-1/2 text-right inline-block">
                <img src="./wicons/animated/day.svg" class="inline-block h-8 w-8 m-0 p-0">${data.feels_like.day.toString()}&deg;C / <img src="./wicons/animated/night.svg" class="inline-block h-8 w-8 m-0 p-0">${data.feels_like.night}&deg;C</span>
		</div>
    `
    eightDaysForecast.innerHTML+=htmlinner
    })
    mainDetail.innerHTML = `${weatherData.weather[0].description}`
    todayTemp.innerHTML = `${weatherData.main.temp}&nbsp;&deg;C`
    mainTemp.innerHTML = `${weatherData.main.temp}&nbsp;&deg;C`
    todayFeels.innerHTML = `${weatherData.main.feels_like}&nbsp;&deg;C`
    todayMin.innerHTML = `${weatherData.main.temp_min}&nbsp;&deg;C`
    todayMax.innerHTML = `${weatherData.main.temp_max}&nbsp;&deg;C`
    mainImg.innerHTML = `<img src="./wicons/animated/${weatherData.weather[0].description}.svg" alt="" id="mainImg" class="h-40 w-40">`
    let todayHrsReport = await getTodayReport(locationCoord)
    console.log(todayHrsReport.list);
    todayHrsReport.list.forEach(data => {
        let htmlData = `<div class="text-center mb-0 flex items-center justify-center flex-col">
        <span class="block my-1">${data.dt_txt.substr(10,6)}</span>
        <img src='./wicons/animated/${data.weather[0].description}.svg' class="block w-12 h-12">
        <span class="block my-1">${data.main.temp}&deg;C</span>
        </div>`
        hrsRepost.innerHTML+= htmlData
    })
},false)

