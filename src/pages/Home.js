import spaceBg from '../assets/space-bg.jpg'

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen">
        <div className=" relative">
          <img
            src={spaceBg}
            alt="Nasapi background showing  up space"
            className=" object-cover max-h-screen w-full	 "
          />
          <div className="bg-dark-blue w-screen h-screen absolute top-0 opacity-40	"></div>
        </div>
      </div>
    </div>
  )
}
export default Home
