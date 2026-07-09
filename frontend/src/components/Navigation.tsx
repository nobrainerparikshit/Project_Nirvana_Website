import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'results', label: 'Results' },
  { id: 'join', label: 'Join Nirvana' },
  { id: 'contact', label: 'Contact' },
  { id: 'courses', label: 'Courses' },
];
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#f2f2f0]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo Placeholder */}
          <button
  onClick={() => handleNavClick('home')}
  className="flex items-center gap-3 group"
>
  <img
    src="/images/logo/nirvana_logo.jpg"
    alt="Project Nirvana"
    className="w-12 h-12 object-contain"
  />
  <div className="hidden sm:flex flex-col">
    <span className="font-caveat text-2xl text-navy-900">
      Project Nirvana
    </span>
  </div>
</button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  currentPage === link.id
                    ? 'text-[#FF6B35] bg-[#FF6B35]/10'
                    : 'text-gray-700 hover:text-[#FF6B35] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('join')}
              className="px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-medium rounded-lg hover:bg-[#FF6B35] transition-colors"
            >
              Join Nirvana
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900 hover:text-[#FF6B35] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#f2f2f0] border-t border-gray-100 py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 text-left text-base font-medium transition-colors rounded-lg ${
                    currentPage === link.id
                      ? 'text-[#FF6B35] bg-[#FF6B35]/10'
                      : 'text-gray-700 hover:text-[#FF6B35] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('join')}
                className="mx-4 mt-2 px-6 py-3 bg-[#FF6B35] text-white text-base font-medium rounded-lg hover:bg-[#FF6B35] transition-colors"
              >
                Join Nirvana
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}