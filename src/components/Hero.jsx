import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          تاتش فرنيتشر <br />
          <span className="text-amber-400">فخامة الأثاث العصري</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl ml-auto">
          نقدم لكم تشكيلة واسعة من أرقى قطع الأثاث التي تجمع بين الجمال والجودة العالية لتناسب ذوقكم الرفيع وتضفي لمسة ساحرة على منزلكم.
        </p>
        <div className="flex gap-4 justify-end">
          <a href="#products" className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-amber-700 transition duration-300 shadow-lg">
            تسوق الآن
          </a>
          <a href="#about" className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 shadow-lg">
            اكتشف المزيد
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
