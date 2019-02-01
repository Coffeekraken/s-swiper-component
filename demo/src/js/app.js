import "babel-polyfill"
import "coffeekraken-sugar/js/features/all"
import SSwiperComponent from "../../../dist/index"

const swiper1 = document.querySelector("s-swiper")
swiper1.addEventListener("slideChange", e => {
  console.log("slide change", e)
})
