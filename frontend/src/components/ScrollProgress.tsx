import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
      setShowBackToTop(scrollTop > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-[#FF6B35] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-navy-900 text-white shadow-lg flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300 ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}