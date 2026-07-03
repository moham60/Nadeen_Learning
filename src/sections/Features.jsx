import { motion } from 'framer-motion';
import { features } from '../data/content';
import { staggerContainer, staggerItem } from '../utils/animations';

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="py-section-gap-md bg-surface" id="features"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">لماذا تختار "شعلة العلم"؟</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            نحن نؤمن أن التعليم ليس مجرد تلقين، بل هو رحلة اكتشاف وتنمية مهارات.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const colorClasses = {
              primary: 'bg-primary/10 text-primary',
              secondary: 'bg-secondary/10 text-secondary',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600',
              emerald: 'bg-emerald-100 text-emerald-600',
              blue: 'bg-blue-100 text-blue-600',
            };
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-surface-pure p-8 rounded-card border border-outline-variant/30 card-transition shadow-premium"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[feature.color]}`}>
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
