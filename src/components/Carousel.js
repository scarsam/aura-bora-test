import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CarouselImage from './CarouselImage'
import '../styles/global/carousel.scss'
import ArrowBack from 'images/about/carousel/arrow-prev.svg'
import ArrowForward from 'images/about/carousel/arrow-next.svg'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = ({ testamonials }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [testimonialCount, setTestimonialCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth
      setWidth(window.innerWidth)
      let testimonialsToShow = 2
      if (innerWidth > 1900) testimonialsToShow = 3
      else if (innerWidth < 1290) testimonialsToShow = 1

      setTestimonialCount(testimonialsToShow)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      console.log('dawdawdawdawd')
      window.removeEventListener('resize', handleResize)
    }
  }, [width])
  return (
    <>
      <div className="container padding-top-60px padding-bottom-60px carousel">
        <CarouselProvider
          naturalSlideWidth={530}
          naturalSlideHeight={420}
          visibleSlides={testimonialCount}
          totalSlides={testamonials && testamonials.length}
          infinite={true}
          isIntrinsicHeight={true}
          currentSlide={5}
        >
          <Slider>
            {testamonials &&
              testamonials.map((item, index) => (
                <Slide key={index} index={index}>
                  <div className="qoute-card bg-white d-flex align-items-center relative">
                    <div>
                      <p className="text-18px">
                        <ReactMarkdown source={item.text} />
                      </p>
                      <p className="margin-none text-16px font-barlow">
                        <strong>{item.author}</strong>
                      </p>
                    </div>
                    <img
                      className="margin-none"
                      src={CarouselImage(index)}
                      alt=""
                    />
                  </div>
                </Slide>
              ))}
          </Slider>
          <div className="container padding-bottom-40px">
            <div className="d-flex justify-content-between">
              <ButtonBack className="carousel-prev-btn">
                <img className="margin-none" src={ArrowBack} alt="" />
              </ButtonBack>

              <DotGroup
                showAsSelectedForCurrentSlideOnly={true}
                className="carousel-dots"
              />
              <ButtonNext className="carousel-next-btn">
                <img className="margin-none" src={ArrowForward} alt="" />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </>
  )
}

export default Carousel
