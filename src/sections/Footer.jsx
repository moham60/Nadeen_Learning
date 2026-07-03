import { navLinksFooter, socialLinks, contactInfo } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-on-background text-white pt-20 pb-10" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Branding */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white">science</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">نادين السيد</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              المركز الأول في تبسيط العلوم وتنمية شغف الطلاب بالاكتشاف والبحث العلمي.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
                >
                  <span className="material-symbols-outlined text-sm">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Fast Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              {navLinksFooter.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400">
              {contactInfo.map((info, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Map Placeholder */}
          <div className="rounded-2xl overflow-hidden bg-white/5 h-48 relative border border-white/10 group">
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="خريطة الموقع"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5feqlsOrl-EgzJbmFinf7gMXhZKON7UNODb04MRx-yq8dlRcxpN3QiNJoudSoDjT3yHnJ03hFMohl39-_FtwQ-kAFw7WkNPbljRWGxY-vXR2Qt0oc26vQZAcF5Jyn8sl4A2aUHqZp1tVeiNgdXZ0j38FCmAgc6ILF9C1Fqdonx8xlOJwEBhEUywXPr4ux4fglBMQkdHajwDAoadv2VTHcBdDGzgipvEgrKwx5mEY224sm5Z62TBhTcQ"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-primary px-4 py-2 rounded-full text-xs font-bold">افتح الخريطة</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© ٢٠٢٤ الأستاذة نادين السيد. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}