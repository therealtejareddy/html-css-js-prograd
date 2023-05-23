export async function getGeoLocation(city){
  try{
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
    let data = await response.json()
    console.log(data[0].lat,data[0].lon);
    return [data[0].lat,data[0].lon]
  }catch(err){
    console.log(err)
  }
}


export async function getTodayWeather(coord){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
        let data = await response.json()
        return data
    }catch(err){
        console.log(err)
    }
}
export async function getTodayReport(coord){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord[0]}&lon=${coord[1]}&units=metric&cnt=5&appid=${import.meta.env.VITE_API_KEY}`)
        let data = await response.json()
        return data
    }catch(err){
        console.log(err)
    }
}
export async function getEightDayReport(coord){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=minutely&units=metric&appid=${import.meta.env.VITE_ONECALL_KEY}`)
        let data = await response.json()
        return data
    }catch(err){
        console.log(err)
    }
}