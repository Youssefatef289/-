import React from 'react';
import { motion } from 'framer-motion';
import { Award, Truck, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-12 h-12 text-amber-600" />,
    title: "جودة ممتازة",
    description: "نستخدم أفضل أنواع الأخشاب الطبيعية والأقمشة الفاخرة لضمان جودة تدوم طويلاً."
  },
  {
    icon: <Truck className="w-12 h-12 text-amber-600" />,
    title: "توصيل سريع",
    description: "خدمة توصيل احترافية وآمنة لجميع مناطق المملكة مع ضمان سلامة المنتج."
  },
  {
    icon: <Clock className="w-12 h-12 text-amber-600" />,
    title: "التزام بالمواعيد",
    description: "نقدر وقت عملائنا ونلتزم بتسليم الطلبات في المواعيد المتفق عليها بدقة."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-amber-600" />,
    title: "ضمان حقيقي",
    description: "نقدم ضماناً شاملاً على جميع منتجاتنا ضد عيوب التصنيع لراحة بال عملائنا."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            لماذا تختار تاتش فرنيتشر؟
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-amber-600 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
