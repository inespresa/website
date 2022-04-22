/* import "./multimedia.scss"

export default function Multimedia() {
  return (
    <div className="multimedia" id = "multimedia">
      
    </div>
  )
} */
import "./multimedia.scss"
import React, {useState} from 'react'
import { MultimediaData } from './MultimediaData'
import {ArrowLeft, ArrowRight} from '@material-ui/icons'

const Multimedia = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent((current  + 1) % length );
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }

  console.log(current);

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }


  return (
    <section className='multimedia' id = "multimedia">
        <ArrowLeft className="left-arrow" onClick={ previousSlide}/>
        <ArrowRight className="right-arrow" onClick={nextSlide} />
      {MultimediaData.map((slide, index) => {

        if(index === current)
          return <img src={slide.image} alt="travel image" className='image'/>;
          
      })}
    </section>
  );
};

export default Multimedia
