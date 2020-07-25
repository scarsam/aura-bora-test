import Basil from '../images/about/carousel/basil.svg'
import Cactus from '../images/about/carousel/cacus.svg'
import Lavender from '../images/about/carousel/lavender.svg'
import Melon from '../images/about/carousel/melon.svg'
import Peppermint from '../images/about/carousel/peppermint.svg'
import Strawberry from '../images/about/carousel/strawberry.svg'

const CarouselImage = number => {
  if (number === 0 || number === 6) return Basil
  if (number === 1 || number === 7) return Cactus
  if (number === 2 || number === 8) return Lavender
  if (number === 3 || number === 9) return Melon
  if (number === 4 || number === 10) return Peppermint
  if (number === 5 || number === 11) return Strawberry
  return Melon
}

export default CarouselImage
