import { motion } from 'framer-motion';
import { sectionVariants, sectionItemVariants } from '../utils/animations';

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'طالب - المرحلة الإعدادية',
    text: 'الطريقة المبتكرة في الشرح ساعدتني على فهم العلوم بسهولة ورفع درجاتي بشكل ملحوظ.',
  },
  {
    name: 'سارة علي',
    role: 'ولية أمر - طالبة متفوقة',
    text: 'المتابعة الدورية والتواصل المستمر مع المعلمة منحني ثقة كبيرة في مستوى ابنتي.',
  },
  {
    name: 'خالد عبدالله',
    role: 'طالب - المرحلة الثانوية',
    text: 'المراجعات النهائية والملخصات المميزة ساعدتني في تحقيق أعلى الدرجات في الامتحان.',
  },
];

export default function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface-pure"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">آراء طلابنا وأولياء الأمور</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            نفخر بثقة العائلات والطلاب في منهجيتنا التعليمية المتميزة.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={sectionItemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-surface p-8 rounded-card border border-outline-variant/30 shadow-premium"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl">star</span>
                ))}
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-on-background">{item.name}</p>
                  <p className="text-sm text-on-surface-variant">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}