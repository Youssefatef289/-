import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070",
    title: "تاتش فرنيتشر",
    subtitle: "فخامة الأثاث العصري",
    description: "نقدم لكم تشكيلة واسعة من أرقى قطع الأثاث التي تجمع بين الجمال والجودة العالية لتناسب ذوقكم الرفيع."
  },
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2070",
    title: "تصاميم مبتكرة",
    subtitle: "راحة لا تضاهى",
    description: "استمتع بأفضل تصاميم غرف النوم والمعيشة التي توفر لك الراحة التامة والجمال الأخاذ في آن واحد."
  },
  {
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2070",
    title: "جودة تدوم",
    subtitle: "صناعة احترافية",
    description: "نعتمد في تاتش فرنيتشر على أجود أنواع الأخشاب والمواد لضمان استدامة قطع الأثاث لسنوات طويلة."
  }
];

const Hero = () => {
  return (
    <div id="home" className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content */}
              <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-right">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-2xl md:text-3xl font-medium text-amber-400 mb-2">
                    {slide.title}
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    {slide.subtitle}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-2xl ml-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 justify-end">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#products"
                      className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-amber-700 transition duration-300 shadow-xl"
                    >
                      تسوق الآن
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#about"
                      className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition duration-300 shadow-xl"
                    >
                      اكتشف المزيد
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Pagination/Navigation to match RTL and Theme */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #d97706 !important;
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
      `}} />
    </div>
  );
};

export default Hero;
