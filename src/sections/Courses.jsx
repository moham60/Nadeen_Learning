import { motion } from 'framer-motion';
import { sectionVariants, sectionItemVariants, hoverLift } from '../utils/animations';

const courses = [
  {
    title: 'المرحلة الابتدائية',
    description: 'أسس العلوم للصفوف الأولى مع شرح عملي مبسط.',
    icon: 'school',
    color: 'primary',
  },
  {
    title: 'المرحلة الإعدادية',
    description: 'مناهج العلوم المتقدمة مع التركيز على الفهم والتطبيق.',
    icon: 'menu_book',
    color: 'secondary',
  },
  {
    title: 'المرحلة الثانوية',
    description: 'إعداد متكامل للامتحانات مع مراجعات مكثفة.',
    icon: 'emoji_events',
    color: 'purple',
  },
];

const colorClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  purple: 'bg-purple-100 text-purple-600',
};

export default function Courses() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      className="py-section-gap-md bg-surface-pure" id="levels"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div variants={sectionItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">المراحل الدراسية</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            نقدم دروس العلوم للمراحل المختلفة مع محتوى مخصص لكل مستوى دراسي.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={sectionItemVariants}
              whileHover="hover"
              className="bg-surface p-8 rounded-card border border-outline-variant/30 shadow-premium"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[course.color]}`}>
                <span className="material-symbols-outlined text-3xl">{course.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
