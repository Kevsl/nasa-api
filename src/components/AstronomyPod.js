const AstronomyPOD = (props) => {
  return (
    <div>
      <h1 className="text-center text-3xl my-8 ">Nasa's picture of the day</h1>
      <img className="rounded-xl mx-auto" src={props.url} alt={props.title} />
      <p className="my-8 text-center"> {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Author: {props.author}</p>
    </div>
  )
}

export default AstronomyPOD
