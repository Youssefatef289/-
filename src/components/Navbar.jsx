import React from 'react';
import { Menu, X, Sofa } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sofa className="h-8 w-8 text-amber-700" />
            <span className="mr-2 text-2xl font-bold text-amber-900 tracking-tight">تاتش فرنيتشر</span>
          </div>

          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-reverse space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-700 px-3 py-2 font-medium">الرئيسية</a>
              <a href="#products" className="text-gray-700 hover:text-amber-700 px-3 py-2 font-medium">منتجاتنا</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 px-3 py-2 font-medium">من نحن</a>
              <a href="#contact" className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition duration-300">اتصل بنا</a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-md font-medium">الرئيسية</a>
            <a href="#products" className="block text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-md font-medium">منتجاتنا</a>
            <a href="#about" className="block text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-md font-medium">من نحن</a>
            <a href="#contact" className="block text-amber-700 font-bold px-3 py-2">اتصل بنا</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
