import { Mail, Phone, MapPin } from 'lucide-react';
interface FooterProps {
  onNavigate: (page: string) => void;
}
export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
             <img
               src="/images/logo/nirvana_logo.jpg"
               alt="Project Nirvana"
               className="h-16 w-auto"
             />
             <div>
            <h3 className="font-serif text-3xl text-white">
              Project Nirvana </h3>
              </div>
            </div>
            <p className="text-gray-400 font-serif leading-relaxed max-w-md mb-6">
              Transforming India's education system through hands on STEM learning,
              innovation, robotics, research, and real-world problem solving.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="mailto:projectnirvanaindia@gmail.com"
                className="flex items-center gap-2 hover:text-[#FF6B35]transition-colors"
              >
                <Mail size={16} />
                projectnirvanaindia@gmail.com
              </a>
              <a
                href="https://wa.me/9185111010269"
                className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors"
              >
                <Phone size={16} />
                +91 8511010269
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Vadodara, Gujarat, India
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'team', label: 'Our Team' },
                { id: 'join', label: 'Join Nirvana' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors font-serif"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/project_nirvanaindia/"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors font-serif"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/the-project-nirvana/"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors font-serif"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#f2f2f0]/10 my-12" />
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-gray-400 font-serif">
  <p>&copy; {currentYear} Project Nirvana. All Rights Reserved.</p>

  <p className="mt-2 text-sm text-gray-500">
    Built with ẟ by{" "}
    <a
      href="https://pariksh1t.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FF6B35] hover:underline font-medium"
    >
      nobrainerparikshit
    </a>{" "}
    (Parikshitsinh Jadeja)
  </p>

  <p className="mt-2 text-xs text-gray-500 max-w-xl">
    All content, curriculum, resources, visual assets, and educational
    materials presented on this website belong to Project Nirvana unless
    otherwise stated.
  </p>
</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <button className="hover:text-[#FF6B35] transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-[#FF6B35] transition-colors">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
