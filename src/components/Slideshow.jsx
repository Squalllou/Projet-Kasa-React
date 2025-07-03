import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/Slideshow.sass'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const length = pictures.length

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slideshow">
      {length > 1 && (
        <>
          <FaChevronLeft
            className={`slideshow__arrow slideshow__arrow--left ${
              currentIndex === 0 ? 'slideshow__arrow--edge' : ''
            }`}
            onClick={goToPrevious}
          />
          <FaChevronRight
            className={`slideshow__arrow slideshow__arrow--right ${
              currentIndex === length - 1 ? 'slideshow__arrow--edge' : ''
            }`}
            onClick={goToNext}
          />
        </>
      )}
      <img src={pictures[currentIndex]} alt={`slide ${currentIndex + 1}`} className="slideshow__image" />
      {length > 1 && (
        <p className="slideshow__counter">
          {currentIndex + 1} / {length}
        </p>
      )}
    </div>
  )
}

export default Slideshow
