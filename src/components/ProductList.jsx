import React from 'react';

const categories = [
  {
    title: 'غرف المعيشة',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600',
    desc: 'أطقم كنب وكراسي مريحة وبتصاميم خلابة'
  },
  {
    title: 'غرف النوم',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=600',
    desc: 'أسرة وخزائن تضمن لكم راحة لا مثيل لها'
  },
  {
    title: 'غرف الطعام',
    image: 'https://images.unsplash.com/photo-1617806118233-f8e187f4289b?auto=format&fit=crop&q=80&w=600',
    desc: 'طاولات طعام تجمع العائلة في أجواء دافئة'
  },
  {
    title: 'المكاتب',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
    desc: 'بيئة عمل مريحة بتصاميم عملية وعصرية'
  }
];

const ProductList = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تشكيلاتنا المميزة</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من الأثاث المصمم بعناية ليناسب كافة غرف منزلك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">عرض المزيد ←</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
