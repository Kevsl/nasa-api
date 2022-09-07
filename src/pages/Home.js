import spaceBg from '../assets/space-bg.jpg'
import card1 from '../assets/card1.jpg'
import DiscreteSliderValues from '../components/slider'
import { getItemId } from '../redux/item'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getMarsRoverPhotos } from '../services/generalService'
import MarsRoverCards from '../components/marsRovercards'

const Home = () => {
  const id = useSelector((state) => state.item.id)
  const [roversList, setRoverList] = useState([])

  useEffect(() => {
    if (id === 66) {
      getMarsRoverPhotos().then((res) => {
        setRoverList(res.data.photos)
      })
    }
  }, [id])

  return (
    <div>
      <div className="w-screen h-screen">
        <div className=" relative">
          <img
            src={spaceBg}
            alt="Nasapi background showing  up space"
            className=" object-cover max-h-screen w-full	 "
          />
          <div className="bg-dark-blue object-cover max-h-screen absolute top-0 object-cover w-full h-full opacity-40	"></div>
          <p className="absolute top-2/4 text-white text-center text-3xl w-full ">
            Get Nasa Astronomy informations
          </p>
          <div className="absolute top-2/4  w-full">
            <div className="  w-10 mx-45 h-48 ">
              <div className="arrow arrow-first"></div>
              <div className="arrow arrow-second"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pt-8">
          <div className="relative flex  bg-white w-1/2 mx-auto justify-between items-center  ">
            <img src={card1} alt=" a planet" className="h-96  rounded-lg " />
            <p className="text">Find datas for many planets.</p>
          </div>
        </div>
        <div className="mt-12 w-full h-24  flex items-center justify-center	 bg-gray-dark ">
          <DiscreteSliderValues />
        </div>

        {roversList
          ? roversList.map((data, i) => {
              return (
                <MarsRoverCards
                  name={data.rover.name}
                  lauching={data.rover.launch_date}
                  landing={data.landing_date}
                  url={data.img_src}
                  key={i}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}
export default Home
