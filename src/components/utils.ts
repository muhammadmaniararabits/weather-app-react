export const getTemperature = (isCelsius: boolean, kelvinTemp: number) => {
    const temp = isCelsius
    ? kelvinTemp - 273.15
    : (kelvinTemp - 273.15) * (9 / 5) + 32;
    return temp
  }
  
export const getTemperatureUnit = (isCelsius: boolean) => {
 return isCelsius ? "°C" : "°F";
}