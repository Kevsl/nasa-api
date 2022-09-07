const MarsRoverCards = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.lauching}</p>
      <p>{props.landing}</p>
    </div>
  )
}

export default MarsRoverCards
