import spaceBg from '../assets/space-bg.jpg'
import card1 from '../assets/card1.jpg'

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
          <div className="absolute top-2/4  w-full">
            <div className=" text-white text-center text-3xl w-10 mx-45  mx-auto h-48 ">
              <div className="arrow arrow-first"></div>
              <div className="arrow arrow-second"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pt-8">
          <div className="relative flex  bg-white w-1/2 mx-auto justify-between items-center  ">
            <img src={card1} className="h-96  rounded-lg " />
            <p className="text">Find datas for many planets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
