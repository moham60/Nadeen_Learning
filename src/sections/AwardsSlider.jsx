import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { awards } from '../data/awards';
import { sectionVariants, sectionItemVariants } from '../utils/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AwardsSlider() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface-pure relative overflow-hidden" id="awards"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="flex flex-col md:flex-row-reverse justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">لحظات التكريم والنجاح</h2>
            <p className="text-on-surface-variant">فخورون بطلابنا المتفوقين الذين حققوا أعلى الدرجات تحت إشرافنا.</p>
          </div>
          <div className="flex gap-4">
            <div className="swiper-button-prev-custom w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="swiper-button-next-custom w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {awards.map((award, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-card overflow-hidden h-[500px] shadow-premium relative group">
                <img
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={award.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <p className="text-white/80 font-bold text-sm mb-2">{award.badge}</p>
                  <h4 className="text-white text-xl font-bold">{award.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
