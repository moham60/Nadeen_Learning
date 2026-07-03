import { motion } from 'framer-motion';
import { sectionVariants, sectionItemVariants } from '../utils/animations';
import img1 from '../assets/AlTAKRIM/688671337_122273840156184467_5283429370406234981_n.jpg';
import img2 from '../assets/AlTAKRIM/688898951_122273840204184467_5920270258844529900_n.jpg';
import img3 from '../assets/AlTAKRIM/688958390_122273840108184467_3809998827446981237_n.jpg';
import img4 from '../assets/AlTAKRIM/688964700_122273839838184467_6786605247007690118_n.jpg';
import img5 from '../assets/AlTAKRIM/689789759_122273840024184467_6230423410202344445_n.jpg';
import img6 from '../assets/AlTAKRIM/692486964_122273839982184467_3575946269011890446_n.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface" id="gallery"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">معرض ذكرياتنا</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            لمحات من حصصنا التفاعلية واحتفالاتنا المشتركة داخل الفصول الدراسية.
          </p>
        </motion.div>
        <div className="masonry">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={sectionItemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="masonry-item"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-hover transition-all">
                <img
                  alt={`صورة من الحصص ${idx + 1}`}
                  className="w-full object-cover"
                  src={src}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}