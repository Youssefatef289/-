import React from 'react';
import { ShieldCheck, Truck, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">من نحن؟ تاتش فرنيتشر</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              تأسست شركة تاتش فرنيتشر بخبرة تمتد لسنوات طويلة في عالم الأثاث. نحن نؤمن بأن الأثاث ليس مجرد قطع خشبية، بل هو روح المنزل وجزء لا يتجزأ من جودة حياتكم اليومية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">جودة مضمونة</h4>
                  <p className="text-sm text-gray-600">نستخدم أفضل أنواع الأخشاب والأقمشة</p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">تصاميم فريدة</h4>
                  <p className="text-sm text-gray-600">نجمع بين الحداثة واللمسات الكلاسيكية</p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">شحن سريع</h4>
                  <p className="text-sm text-gray-600">توصيل آمن وباحترافية عالية</p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">التزام بالمواعيد</h4>
                  <p className="text-sm text-gray-600">دقة متناهية في مواعيد الاستلام</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
              alt="Our Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
