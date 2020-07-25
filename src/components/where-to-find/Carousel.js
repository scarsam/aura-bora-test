import React from 'react'
import ReactMarkdown from 'react-markdown'
import Slider from 'react-slick'
import CarouselImage from './CarouselImage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/global/carousel.scss'

const Carousel = ({ testamonials }) => {
  useEffect(() => {
    document.querySelector('button.slick-next').style.display = 'none'
    document.querySelector('button.slick-prev').style.display = 'none'
  })

  const handleArrowClick = command => {
    let button = {}
    if (command === 'Next') button = document.querySelector('button.slick-next')
    else button = document.querySelector('button.slick-prev')
    button.click()
  }

  return (
    <>
      <Slider {...sliderSettings}>
        {testamonials &&
          testamonials.map((item, index) => (
            <div
              key={index}
              className="qoute-card bg-white d-flex align-items-center relative"
            >
              <div>
                <p className="text-18px">
                  <ReactMarkdown source={item.text} />
                </p>
                <p className="margin-none text-16px font-barlow">
                  <strong>{item.author}</strong>
                </p>
              </div>
              <img className="margin-none" src={CarouselImage(index)} alt="" />
            </div>
          ))}
      </Slider>
      <div className="d-flex justify-content-between margin-top-35px relative z-index-2">
        <button id="Prev" onClick={e => handleArrowClick(e.currentTarget.id)}>
          Prev
        </button>
        <button id="Next" onClick={e => handleArrowClick(e.currentTarget.id)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Carousel

const sliderSettings = {
  centerPadding: '160px',
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 5,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        centerPadding: '0px',
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        initialSlide: 1,
        arrows: false,
      },
    },
  ],
}
