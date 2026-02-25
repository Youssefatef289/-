import React from 'react';
import { Facebook, Instagram, Twitter, Sofa } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
          <div>
            <div className="flex items-center justify-end mb-6">
              <span className="text-2xl font-bold">تاتش فرنيتشر</span>
              <Sofa className="h-8 w-8 text-amber-500 mr-2" />
            </div>
            <p className="text-amber-100/70 leading-relaxed">
              نحن نسعى دائماً لتقديم الأفضل لعملائنا، مجمعين بين الجودة السويسرية والجمال العربي في قطع الأثاث التي نصنعها.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-500">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">منتجاتنا</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">من نحن</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-500">تابعنا على</h4>
            <div className="flex justify-end space-x-reverse space-x-6">
              <a href="#" className="bg-amber-900/50 p-3 rounded-full hover:bg-amber-500 transition-all duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-amber-900/50 p-3 rounded-full hover:bg-amber-500 transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-amber-900/50 p-3 rounded-full hover:bg-amber-500 transition-all duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-8 text-sm text-amber-100/50">
              جميع الحقوق محفوظة © {new Date().getFullYear()} تاتش فرنيتشر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
