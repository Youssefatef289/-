import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            تواصل معنا
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-amber-600 mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار الأثاث الأنسب لمنزلكم
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl order-2 lg:order-1 text-right border border-gray-100"
          >
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الاسم بالكامل</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-right transition-all" placeholder="أدخل اسمك هنا" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-right transition-all" placeholder="05XXXXXXXX" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-right transition-all" placeholder="name@example.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-right h-32 transition-all resize-none" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition duration-300 shadow-lg shadow-amber-600/20"
              >
                إرسال الطلب
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center order-1 lg:order-2 space-y-8 text-right px-4"
          >
            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-white shadow-lg p-4 rounded-2xl text-amber-600 shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">اتصل بنا</h4>
                <p className="text-gray-600 font-medium text-lg dir-ltr">+20 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-white shadow-lg p-4 rounded-2xl text-amber-600 shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">البريد الإلكتروني</h4>
                <p className="text-gray-600 font-medium text-lg">info@touchfurniture.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-white shadow-lg p-4 rounded-2xl text-amber-600 shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">موقعنا</h4>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">القاهرة، مدينة نصر، شارع مكرم عبيد <br /> مبنى تاتش التجاري</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">ساعات العمل</h4>
              <p className="text-gray-600 italic flex items-center gap-2 justify-end">
                <span>يومياً من الساعة 10 صباحاً وحتى 10 مساءً</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
