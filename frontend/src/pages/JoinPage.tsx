import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Bot, Cpu, Printer, Brain, Microscope, Users, Trophy, Mail, Phone, ExternalLink } from 'lucide-react';
interface JoinPageProps {
  onNavigate: (page: string) => void;
}
export function JoinPage({ onNavigate }: JoinPageProps) {
  return (
    <main className="bg-[#f2f2f0] pt-20">
      <JoinHero />
      <BenefitsSection />
      <WhatYouGetSection />
      <MentorInstitutionsSection />
      <ApplyCTA onNavigate={onNavigate} />
      <ContactInfo />
    </main>
  );
}
function JoinHero() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-navy-900 leading-tight mb-6">
            Join India's Next Generation of Innovators
          </h1>
          <p className="font-serif text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Begin your journey into STEM, innovation, and research with hands on
            mentorship from experienced innovators.
          </p>
        </div>
      </div>
    </section>
  );
}
function BenefitsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const benefits = [
    { name: 'Robotics', icon: Bot, description: 'Build and program robots from scratch' },
    { name: 'STEM Projects', icon: Cpu, description: 'Hands-on engineering and electronics' },
    { name: 'Research Exposure', icon: Microscope, description: 'Learn scientific methodology' },
    { name: 'Innovation Competitions', icon: Trophy, description: 'Prepare for national and international events' },
    { name: 'Mentorship', icon: Users, description: 'Guidance from experienced innovators' },
    { name: '3D Printing', icon: Printer, description: 'Design and create physical prototypes' },
    { name: 'AI and Programming', icon: Brain, description: 'Learn cutting edge technologies' },
  ];
  return (
    <section className="section-padding bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mb-4">
            What You'll Experience
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive program designed to transform curious students into confident innovators
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="group text-center p-6 lg:p-8 rounded-xl bg-[#f2f2f0] border border-gray-100 hover:shadow-lg hover:border-[#FF6B35] transition-all"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#f2f2f0] flex items-center justify-center text-[#FF6B35] mb-4 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                <benefit.icon size={28} />
              </div>
              <h3 className="font-serif text-navy-900 font-medium mb-1">
                {benefit.name}
              </h3>
              <p className="font-serif text-sm text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function WhatYouGetSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const offerings = [
    {
      title: 'Hands On Learning',
      description: 'Work on real projects, not just theory. Build robots, conduct experiments, and create solutions.',
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn from students and researchers who have worked with NASA, MIT, IITs, and leading institutions.',
    },
    {
      title: 'Research Opportunities',
      description: 'Get exposure to scientific research methodology and publishing opportunities.',
    },
    {
      title: 'Competition Prep',
      description: 'Training and guidance for national and international STEM competitions.',
    },
  ];
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden order-2 lg:order-1">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center p-8">
                <p className="font-display">Students in workshop</p>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mb-4">
              Why Join Nirvana?
            </h2>
            <p className="font-serif text-lg text-gray-600 mb-8">
              We provide what traditional education often misses: hands on experience,
              mentorship, and real world problem solving.
            </p>
            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <div
                  key={offering.title}
                  className="flex gap-4"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f2f2f0] flex items-center justify-center text-[#FF6B35] flex-shrink-0 mt-1">
                    <span className="font-serif text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-navy-900 font-medium mb-1">
                      {offering.title}
                    </h3>
                    <p className="font-serif text-gray-600">
                      {offering.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorInstitutionsSection() {
const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
const institutions = [
  {
    name: 'MIT CSAIL',
    logo: '/images/MA/mitcsail.jpg',
    href: 'https://www.csail.mit.edu',
  },
  {
    name: 'IIT Madras',
    logo: '/images/MA/iitmadras.jpg',
    href: 'https://www.iitm.ac.in',
  },
  {
    name: 'IIT Bombay',
    logo: '/images/MA/iitbombay.jpg',
    href: 'https://www.iitb.ac.in',
  },
  {
    name: 'IIT Guwahati',
    logo: '/images/MA/iitguwahati.jpg',
    href: 'https://www.iitg.ac.in',
  },
  {
    name: 'IISc Bangalore',
    logo: '/images/MA/iiscbangalore.jpg',
    href: 'https://www.iisc.ac.in',
  },
  {
    name: 'MS University',
    logo: '/images/MA/msu.jpg',
    href: 'https://www.msu.edu',
  },
  {
    name: 'KIIT',
    logo: '/images/MA/kiit.jpg',
    href: 'https://www.kiit.ac.in',
  },
];
  return (
    <section className="section-padding overflow-hidden bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="highlight-heading font-serif text-4xl lg:text-6xl text-navy-900 mb-6">
            Learn From Mentors Connected To
          </h2>

          <p className="font-serif text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Our mentors are currently studying, researching, working, or have
            been mentored through leading institutions including MIT CSAIL,
            IISc Bangalore, IIT Madras, IIT Bombay, IIT Guwahati, KIIT, and The
            Maharaja Sayajirao University of Baroda.
          </p>
        </div>

        <div className="overflow-hidden mt-12">
          <div className="flex items-center gap-24 animate-marquee">
            {[...institutions, ...institutions].map((institution, index) => (
  <a
    key={index}
    href={institution.href}
    target="_blank"
    rel="noopener noreferrer"
    title={institution.name}
    className="flex-shrink-0 transition-all duration-300 hover:scale-105"
  >
    <img
      src={institution.logo}
      alt={institution.name}
      className="h-28 lg:h-40 w-auto object-contain"
    />
  </a>
))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplyCTA({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-12 lg:p-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mb-4">
            Want to join? Apply now and start your journey to becoming an internationally recognized innovator!
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Take the first step toward becoming an innovator. No prior experience
            required, just curiosity and enthusiasm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/xBwQNfAEKPdsCwWn9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] text-white text-lg font-medium rounded-xl hover:bg-[#E55A2B] transition-colors"
            >
              Apply Now
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f2f2f0] border-2 border-navy-900 text-navy-900 text-lg font-medium rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              Learn More
            </button>
          </div>
          <p className="font-serif text-sm text-gray-500 mt-6">
              Open to students who are eager to learn, innovate, and make a difference. We welcome students from all backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
}
function ContactInfo() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-navy-900 mb-8">
            Questions? Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:projectnirvanaindia@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#f2f2f0] rounded-xl border border-gray-100 hover:border-[#FF6B35] hover:shadow-md transition-all text-navy-900"
            >
              <Mail size={20} className="text-[#FF6B35]" />
              <span className="font-display">projectnirvanaindia@gmail.com</span>
            </a>
            <a
              href="https://wa.me/9185111010269"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#f2f2f0] rounded-xl border border-gray-100 hover:border-[#FF6B35] hover:shadow-md transition-all text-navy-900"
            >
              <Phone size={20} className="text-[#FF6B35]" />
              <span className="font-display">+91 8511010269</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}