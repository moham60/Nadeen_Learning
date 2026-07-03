import { motion } from 'framer-motion';
import { faqs } from '../data/content';
import { sectionVariants, sectionItemVariants } from '../utils/animations';

export default function Faq() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface-pure" id="faq"
    >
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">الأسئلة الشائعة</h2>
          <p className="text-on-surface-variant">كل ما تود معرفته عن نظامنا الدراسي والاشتراك.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.details
              key={idx}
              variants={sectionItemVariants}
              className="group bg-surface rounded-2xl p-6 border border-outline-variant/30 open:ring-2 open:ring-primary/20 transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-bold">{faq.question}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-on-surface-variant leading-relaxed">{faq.answer}</div>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}