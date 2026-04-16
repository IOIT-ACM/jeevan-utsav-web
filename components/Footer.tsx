import { Heart, MapPin, Phone } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold text-xl text-gray-900">Jeevan Utsav Kendra</h3>
            <div className="flex items-start gap-2 mt-3 text-sm text-gray-600">
              <MapPin size={16} className="mt-1 text-gray-400" />
              <p className="leading-relaxed">
                Navsaryan Society, Dakshina Vidhyalaya, Auromira Campus, Nargol, District Valsad,
                Gujarat - 396120, India.
                <span className="block text-gray-400 mt-1">Near Nargol Beach</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Contact</h4>

            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" />
                <span>Prof. Sanjay Bhandari — +91 98697 05166</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" />
                <span>Prof. Anita Jain — +91 97135 40009</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between md:items-end">
            <div className="text-sm text-gray-600 md:text-right">
              <p className="font-medium text-gray-900">AISSMS IOIT ACM Student Chapter</p>
              <p className="mt-1 flex items-center gap-1 md:justify-end text-gray-500">
                Built with <Heart size={14} className="text-red-500" /> by students
              </p>
            </div>

            <div className="mt-6 md:mt-10 text-xs text-gray-400 md:text-right">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
