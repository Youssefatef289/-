import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار الأثاث الأنسب لمنزلكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg order-2 lg:order-1 text-right">
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">الاسم بالكامل</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-right" placeholder="أدخل اسمك هنا" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-right" placeholder="05XXXXXXXX" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-right h-32" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>
              <button className="w-full bg-amber-700 text-white font-bold py-4 rounded-lg hover:bg-amber-800 transition duration-300 shadow-md">
                إرسال الطلب
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center order-1 lg:order-2 space-y-8 text-right">
            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-amber-100 p-4 rounded-full text-amber-700 shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">اتصل بنا</h4>
                <p className="text-gray-600 font-medium text-lg">+20 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-amber-100 p-4 rounded-full text-amber-700 shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">البريد الإلكتروني</h4>
                <p className="text-gray-600 font-medium text-lg">info@touchfurniture.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <div className="bg-amber-100 p-4 rounded-full text-amber-700 shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">موقعنا</h4>
                <p className="text-gray-600 font-medium text-lg">القاهرة، مدينة نصر، شارع مكرم عبيد</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">ساعات العمل</h4>
              <p className="text-gray-600 italic">يومياً من الساعة 10 صباحاً وحتى 10 مساءً</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
