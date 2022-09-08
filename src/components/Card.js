import moment from 'moment'
const Card = (props) => {
  return (
    <div className="w-3/4 mx-auto my-12 bg-gray-dark rounded-lg">
      <img className="mx-auto rounded-lg" src={props.url} alt={props.title} />
      <p className="text-center text-white mx-auto">{props.title}</p>
      <p className="text-center text-white mx-auto">
        {moment(props.date_created).format('YYYY MMMM Do  ')}
      </p>
    </div>
  )
}

export default Card
