import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "أحمد العتيبي",
    role: "عميل",
    content: "تجربة رائعة مع تاتش فرنيتشر. الجودة تفوق التوقعات والتوصيل كان في الموعد تماماً. أنصح بهم بشدة لكل من يبحث عن التميز.",
    rating: 5
  },
  {
    name: "سارة محمود",
    role: "مصممة ديكور",
    content: "كمصممة ديكور، أبحث دائماً عن قطع تجمع بين الفن والوظيفة، وهذا ما وجدته في تاتش فرنيتشر. تصاميم عصرية وأنيقة.",
    rating: 5
  },
  {
    name: "محمد خالد",
    role: "عميل",
    content: "خدمة عملاء ممتازة وقطع أثاث راقية جداً. قمت بتأثيث منزلي بالكامل من عندهم والنتيجة كانت مبهرة للجميع.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            ماذا يقول عملاؤنا؟
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-amber-600 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-amber-600/10" />
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                "{item.content}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-amber-600">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
