import { Menu, X, Leaf } from 'lucide-react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useUIStore } from '../store/useUIStore';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Activities', path: '/activities' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-forest-green font-bold border-b-2 border-forest-green'
      : 'text-gray-600 hover:text-forest-green transition-colors';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="bg-forest-green p-1.5 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-gray-900 tracking-tight">
              Jeevan Utsav Kendra
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest-green hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Give Suggestions
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-b border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-sand-beige text-forest-green'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center mt-4 bg-forest-green text-white px-3 py-3 rounded-md text-base font-medium"
            >
              Give Suggestions
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
