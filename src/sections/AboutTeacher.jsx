import { motion } from 'framer-motion';
import { sectionVariants, sectionItemVariants } from '../utils/animations';
import teacherImage from '../assets/heroImg/474619063_122197517612184467_8762378716178084788_n.jpg';

export default function AboutTeacher() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface" id="about"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">عن المعلمة نادين السيد</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            معلمة علم شغوفة بخبرة واسعة في تدريس العلوم للمراحل المختلفة، نسعى لبناء جيل واعي ومبدع.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={sectionItemVariants} className="rounded-card overflow-hidden shadow-premium">
            <img
              alt="المعلمة نادين السيد"
              className="w-full object-cover"
              src={teacherImage}
            />
          </motion.div>
          <motion.div variants={sectionItemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">الأستاذة نادين السيد</h3>
            <p className="text-on-surface-variant leading-relaxed">
              معلمة علوم متخصصة بخبرة أكثر من 3 سنوات في مجال التدريس، أسعى دائماً لتبسيط المفاهيم العلمية
              وخلق بيئة تعليمية ممتعة للطلاب.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 bg-surface-pure p-4 rounded-card border border-outline-variant/30">
                <p className="text-2xl font-extrabold text-primary">+3</p>
                <p className="text-sm text-on-surface-variant">سنوات خبرة</p>
              </div>
              <div className="flex-1 bg-surface-pure p-4 rounded-card border border-outline-variant/30">
                <p className="text-2xl font-extrabold text-secondary">+500</p>
                <p className="text-sm text-on-surface-variant">طالب</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}