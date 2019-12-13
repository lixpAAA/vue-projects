import { Carousel, CarouselItem } from 'element-ui'



console.log('ElCarousel', Carousel)
const Element = {
  install: function (vue) {
    vue.use(Carousel)
    vue.use(CarouselItem)
  }
}


export default Element