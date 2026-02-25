import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            تشكيلاتنا المميزة
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
            اكتشف مجموعتنا الواسعة من الأثاث المصمم بعناية ليناسب كافة غرف منزلك
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold">تسوق القسم</span>
                </div>
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
                <button className="text-amber-700 font-bold hover:text-amber-900 transition-colors flex items-center gap-2 mr-auto flex-row-reverse">
                  <span>عرض المزيد</span>
                  <span>←</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
