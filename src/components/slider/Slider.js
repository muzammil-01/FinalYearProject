import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

export default function Slider({id}) {

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  //   const [result, setResult] = useState([])
  // var res = []
  //   useEffect(() => {

  //       getImages()
  //   }, [])

  //   const getImages = async ()=>{
  //       const images = await fetch(`http://localhost:3001/api/property/${id}`)
  //          res = await images.json()
  //           for(let i = 0; i<result.length;i++){
  //             result.push(res.propertyImages[i])
  //           }
  //           // console.log(" print in func",result)
  //       }

      
  //         console.log("outside function",result)
    

  return (
    <>
    <img src={`http://localhost:3001/public/images/${property.propertyImages[0]}`} alt="..." />
{/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    {result && result.map((proper) => (
               

  <div key={id} className="carousel-inner">
    <div className="carousel-item active">
      <img src={proper.propertyImages} className="d-block w-100" alt="..." />
    </div>
  </div>
            )
            )}
</div> */}
    </>
  )
}
