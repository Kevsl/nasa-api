import spaceBg from '../assets/space-bg.jpg'

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen">
        <div className="w-screen">
          <img
            src={spaceBg}
            alt="Nasapi background showing  up space"
            className=" object-fill "
          />
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}
export default Home
