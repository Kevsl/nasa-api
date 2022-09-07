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
          <p className="absolute top-2/4 text-white text-center text-3xl w-full ">
            Get Nasa Astronomy informations
          </p>
          <div className="absolute top-3/4  w-full">
            <div className=" text-white text-center text-3xl w-10 mx-45  mx-auto h-24  ">
              <div className="arrow arrow-first"></div>
              <div className="arrow arrow-second"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
