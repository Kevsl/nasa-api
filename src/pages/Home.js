import spaceBg from '../assets/space-bg.jpg'
import DiscreteSliderValues from '../components/slider'
import { setItemId } from '../redux/item'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAPOD, getSearchedContent } from '../services/generalService'
import Card from '../components/Card'
import AstronomyPOD from '../components/AstronomyPod'

const Home = () => {
  const id = useSelector((state) => state.item.id)
  const [results, setResults] = useState([])
  const [astronomyPOD, setAstronomyPOD] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    getSearchedContent(id).then((res) => {
      setResults(res.data.collection.items)
    })
  }, [id])

  useEffect(() => {
    getAPOD().then((res) => {
      setAstronomyPOD(res.data)
    })
  }, [])

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
              <a href="#search">
                <div className="arrow arrow-first"></div>
                <div className="arrow arrow-second"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pt-8">
          <div className="relative flex  bg-white w-1/2 mx-auto justify-between items-center  ">
            {astronomyPOD ? (
              <AstronomyPOD
                url={astronomyPOD.url}
                title={astronomyPOD.title}
                description={astronomyPOD.explanation}
                author={astronomyPOD.copyright}
              />
            ) : null}
          </div>
        </div>
        <div className="mt-24 w-full flex items-center flex-col justify-center ">
          <p className="text-4xl text-center">Choose a theme OR search one </p>
          <input
            type="text"
            className="w-56 mb-4 mt-4   h-6 border border-lg border-black rounded-md"
            onChange={(e) => {
              dispatch(setItemId(e.target.value))
            }}
          />
        </div>
        <div
          id="search"
          className=" w-full h-24  flex items-center justify-center	 bg-gray-dark "
        >
          <DiscreteSliderValues />
        </div>

        {results
          ? results.map((result, i) => {
              if (result.links) {
                return (
                  <Card
                    url={result.links[0].href}
                    date_created={result.data[0].date_created}
                    title={result.data[0].title}
                    key={i}
                  />
                )
              }

              // Add a default return value here
              return null
            })
          : null}
      </div>
    </div>
  )
}
export default Home
