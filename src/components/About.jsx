import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              قصة تاتش فرنيتشر <br />
              <span className="text-amber-600">إبداع يتجاوز الحدود</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              تأسست شركة تاتش فرنيتشر بخبرة تمتد لسنوات طويلة في عالم الأثاث. نحن نؤمن بأن الأثاث ليس مجرد قطع خشبية، بل هو روح المنزل وجزء لا يتجزأ من جودة حياتكم اليومية.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نهتم في كل قطعة نصنعها بأدق التفاصيل، من اختيار نوع الخشب وحتى اللمسات النهائية، لنقدم لعملائنا تجربة استثنائية تجمع بين الراحة المطلقة والجمال الفني الذي يعكس ذوقهم الرفيع.
            </p>

            <div className="flex gap-8 justify-end">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-gray-900">+10</h4>
                <p className="text-gray-500 text-sm">سنوات خبرة</p>
              </div>
              <div className="text-center border-r border-gray-200 pr-8">
                <h4 className="text-3xl font-bold text-gray-900">+500</h4>
                <p className="text-gray-500 text-sm">مشروع منجز</p>
              </div>
              <div className="text-center border-r border-gray-200 pr-8">
                <h4 className="text-3xl font-bold text-gray-900">+1000</h4>
                <p className="text-gray-500 text-sm">عميل سعيد</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
                alt="Our Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-100 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
