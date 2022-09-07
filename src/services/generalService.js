export function getMarsRoverPhotos() {
  const apiPicOfTheDay = axios
    .get(
      ' https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=ECFcDKRuiucQcskKdNafSMlbk0mlSHySRq7ACbsw'
    )
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })

  console.log(apiPicOfTheDay)
}
