import { ResultsPage } from './pages/ResultsPage';
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';
import { CoursesPage } from './pages/CoursesPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handlePopState = () => {
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'results':
        return <ResultsPage onNavigate={handleNavigate} />;
      case 'join':
        return <JoinPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage onNavigate={handleNavigate} />;

    }
  };
  return (
    <div className="min-h-screen bg-[#f2f2f0] flex flex-col">
      <ScrollProgress />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
export default App;