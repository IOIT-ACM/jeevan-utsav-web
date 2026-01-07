import { Heart } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-lg text-gray-900">Jeevan Utsav Kendra</h3>
            <p className="text-gray-500 text-sm mt-1">Nargol, Gujarat</p>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-soil-brown fill-current" />
            <span>by AISSMS IOIT ACM Student Chapter</span>
          </div>

          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
