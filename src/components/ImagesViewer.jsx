import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const photos = [
  require('../assets/img26.png'),
  require('../assets/img27.png'),
  require('../assets/img28.png'),
  require('../assets/img29.png'),
]
function ImagesViewer({ images = photos }) {
  return (
    <div className="absolute bg-black max-w-[300%] top-0 z-20">
      <Swiper
        navigation={true}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={0}
        className="mySwiper"
      >
        {images.map((pic) => (
          <SwiperSlide>
            <img src={pic} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImagesViewer
