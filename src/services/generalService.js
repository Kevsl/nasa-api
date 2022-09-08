import axios from 'axios'

export function getMarsRoverPhotos() {
  return axios
    .get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=ECFcDKRuiucQcskKdNafSMlbk0mlSHySRq7ACbsw'
    )
    .then((response) => response)
    .catch((err) => {
      console.log(err)
    })
}

export function getAPOD() {
  return axios
    .get(
      'https://api.nasa.gov/planetary/apod?api_key=ECFcDKRuiucQcskKdNafSMlbk0mlSHySRq7ACbsw'
    )
    .then((response) => response)
    .catch((err) => {
      console.log(err)
    })
}
export function getSearchedContent(value) {
  return axios

    .get(`https://images-api.nasa.gov/search?q=${value}`)
    .then((response) => response)
    .catch((err) => {
      console.log(err)
    })
}
