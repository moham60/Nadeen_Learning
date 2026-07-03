import { motion } from 'framer-motion';
import heroImage from '../assets/heroImg/474619063_122197517612184467_8762378716178084788_n.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-section-gap-md hero-gradient relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row-reverse items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-right">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-6"
          >
            <span className="material-symbols-outlined text-sm">stars</span>
            <span className="text-sm font-bold">بوابتك للتفوق في مادة العلوم</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-on-background mb-6 leading-tight"
          >
            العلوم بطريقة{' '}
            <span className="text-primary italic">بسيطة...</span> والنجاح يبدأ من هنا.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-10"
          >
            نحول تعقيدات العلوم إلى مفاهيم سهلة وممتعة. انضم إلينا اليوم لتكتشف شغفك الحقيقي وتضمن أعلى الدرجات في مسيرتك الدراسية.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row-reverse items-center gap-4 justify-center md:justify-start"
          >
            <button className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-button font-bold text-lg hover:shadow-lg transition-all">
              ابدأ رحلة التعلم
            </button>
            <button className="w-full sm:w-auto bg-surface-pure border border-outline-variant text-on-background px-8 py-4 rounded-button font-bold text-lg hover:bg-surface transition-all">
              اعرف المزيد
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-surface-pure shadow-premium aspect-[4/5]">
            <img
              alt="الأستاذة نادين السيد"
              className="w-full h-full object-cover"
              src={heroImage}
              loading="eager"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-8 top-10 bg-surface-pure p-4 rounded-2xl shadow-premium"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-bold">الطلاب الملتحقون</p>
                <p className="text-xl font-extrabold text-primary">+٥٠٠ طالب</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-8 bottom-20 bg-surface-pure p-4 rounded-2xl shadow-premium"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-bold">نسبة النجاح</p>
                <p className="text-xl font-extrabold text-secondary">٩٥٪</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}