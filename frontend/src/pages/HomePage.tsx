import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Users, GraduationCap, MapPin, BookOpen, Cpu, Printer, Brain, Wifi, Microscope, MessageSquare, Atom, FlaskConical, Dna, Calculator, Bot, Lightbulb, Beaker, Trophy, Handshake } from 'lucide-react';
interface HomePageProps {
  onNavigate: (page: string) => void;
}
export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="bg-[#f2f2f0]">
      <HeroSection onNavigate={onNavigate} />
      <ImpactMetrics />
      <MissionSection />
      <WhatWeTeachSection />
      <HowWeTeachSection />
      <WhyWeExistSection />
      <PartnersSection />
      <VisionSection />
      <ContactSection onNavigate={onNavigate} />
    </main>
  );
}
function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gray-50 to-transparent opacity-50" />
      <div
        ref={ref}
        className={`container-wide text-center py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="font-caveat text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-navy-900 leading-tight mb-8 text-balance">
            Empowering Students to Think, Build, and Innovate
          </h1>
          <p className="font-serif text-2xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming India's education system through hands on STEM learning,
            innovation, robotics, research, and real world problem solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('join')}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] text-white text-lg font-medium rounded-xl hover:bg-[#FF6B35] transition-colors"
            >
              Join Nirvana
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#f2f2f0] border-2 border-navy-900 text-navy-900 text-lg font-medium rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
function ImpactMetrics() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const metrics = [
    { value: '4', label: 'NGO Partners', icon: Handshake },
    { value: '50+', label: 'Students Mentored', icon: Users },
    { value: '6-10', label: 'Grades', icon: GraduationCap },
    { value: 'Urban + Rural', label: 'Communities', icon: MapPin },
  ];
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-[#f2f2f0] rounded-xl p-6 lg:p-8 text-center group hover:shadow-lg transition-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#f2f2f0] flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                <metric.icon size={24} />
              </div>
              <div className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-2">
                {metric.value}
              </div>
              <div className="font-serif text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function MissionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
              Our Mission
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
          <div className="font-serif text-lg lg:text-xl text-gray-700 space-y-6 leading-relaxed">
            <p>
              Project Nirvana is a Not for profit STEM education platform dedicated to
              replacing rote memorization with curiosity driven learning.
            </p>
            <p>
              India has thousands of innovation labs and STEM resources, but students
              often lack mentorship, exposure, and structured pathways to innovation.
            </p>
            <p>
              Nirvana provides mentorship, hands on experiences, and opportunities
              that help students transform curiosity into innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatWeTeachSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const subjects = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Scientific Inquiry', icon: Microscope },
    { name: 'Robotics', icon: Bot },
    { name: 'Electronics', icon: Cpu },
    { name: '3D Printing', icon: Printer },
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'IoT', icon: Wifi },
    { name: 'Research Methodology', icon: BookOpen },
    { name: 'Science Communication', icon: MessageSquare },
    { name: 'Physics', icon: Atom },
    { name: 'Chemistry', icon: FlaskConical },
    { name: 'Biology', icon: Dna },
    { name: 'Mathematics', icon: Calculator },
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
          <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
            What We Teach
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive curriculum designed to build skills for the future
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {subjects.map((subject, index) => (
            <div
              key={subject.name}
              className="group bg-[#f2f2f0] rounded-xl p-6 hover:shadow-lg hover:border-[#FF6B35] border border-transparent transition-all cursor-default"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#f2f2f0] flex items-center justify-center text-[#FF6B35] mb-4 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                <subject.icon size={20} />
              </div>
              <h3 className="font-serif text-navy-900 font-medium">{subject.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function HowWeTeachSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const methods = [
    {
      title: 'Robotics Workshops',
      description: 'Hands on building and programming of robots',
      icon: Bot,
    },
    {
      title: '3D Printing Workshops',
      description: 'From design to creation with additive manufacturing',
      icon: Printer,
    },
    {
      title: 'Scientific Experiment Labs',
      description: 'Real experiments that bring concepts to life',
      icon: Beaker,
    },
    {
      title: 'Innovation Challenges',
      description: 'Competitive problem solving events',
      icon: Lightbulb,
    },
    {
      title: 'Research Exposure Sessions',
      description: 'Introduction to scientific research methodology',
      icon: Microscope,
    },
    {
      title: 'Competition Preparation',
      description: 'Training for national and international events',
      icon: Trophy,
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
        <div className="text-center mb-16">
          <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
            How We Teach
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            Experiential learning through hands on programs and mentorship
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className="group relative bg-[#f2f2f0] rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {/* Photo placeholder */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="font-serif text-sm">Photo Placeholder</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#f2f2f0] flex items-center justify-center text-[#FF6B35] flex-shrink-0 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  <method.icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy-900 font-medium mb-2">
                    {method.title}
                  </h3>
                  <p className="font-serif text-gray-600">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function WhyWeExistSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const problems = [
    {
      title: 'Memorization over Understanding',
      description: 'Students memorize formulas without grasping underlying concepts',
      stat: '85%',
      statLabel: 'of students rely on rote learning',
    },
    {
      title: 'Lack of Innovation Exposure',
      description: 'Limited access to modern technology and innovation practices',
      stat: '90%',
      statLabel: 'never experience hands on STEM projects',
    },
    {
      title: 'Underutilized STEM Labs',
      description: 'Schools have labs but lack expertise to use them effectively',
      stat: '75%',
      statLabel: 'of school labs are underutilized',
    },
    {
      title: 'Limited Access to Mentorship',
      description: 'Students lack guidance from professionals and researchers',
      stat: '60%',
      statLabel: 'have no STEM mentor access',
    },
    {
      title: 'Lack of Competition Pathways',
      description: 'Students unaware of opportunities in STEM competitions',
      stat: '95%',
      statLabel: 'unaware of major STEM competitions',
    },
  ];

  return (
    <section className="section-padding bg-navy-900 text-white">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="font-caveat text-4xl lg:text-5xl mb-4">
            Why We Exist
          </h2>
          <p className="font-serif text-lg text-gray-400 max-w-2xl mx-auto">
            Addressing critical gaps in India's education system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 lg:p-8 rounded-xl bg-[#f2f2f0]/5 hover:bg-[#f2f2f0]/10 transition-all border border-[#f2f2f0]/10"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="mb-4">
                <span className="font-caveat text-4xl lg:text-5xl text-[#FF6B35]">
                  {problem.stat}
                </span>
                <p className="text-sm text-gray-500 mt-1">{problem.statLabel}</p>
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">
                {problem.title}
              </h3>
              <p className="font-serif text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const partners = [
  {
    name: "Partner 1",
    logo: "/images/partners/neev.jpg",
  },
  {
    name: "Partner 2",
    logo: "/images/partners/gps.jpg",
  },
  {
    name: "Partner 3",
    logo: "/images/partners/pratibha.jpg",
  },
  {
    name: "Partner 4",
    logo: "/images/partners/VIC.jpg",
  },
  {
    name: "Partner 5",
    logo: "/images/partners/aura.jpg",
  },
];
function PartnersSection() {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
            Our Partners and Ecosystem
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            Working together to build India's next generation of innovators
          </p>
        </div>
      </div>
      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        {/* Scrolling logos */}
        <div className="flex animate-slide-left">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-42 lg:h-62 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}
function VisionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const milestones = [
    {
      year: 'Year 1',
      title: 'Foundation',
      description: '4 NGO partners, schools across Vadodara, 50+ students',
      color: 'bg-[#FF6B35]',
    },
    {
      year: 'Year 2',
      title: 'Regional Growth',
      description: 'Expansion across Gujarat with regional mentor networks',
      color: 'bg-[#FF6B35]',
    },
    {
      year: 'Year 3',
      title: 'National Reach',
      description: 'National expansion across multiple states',
      color: 'bg-[#FF6B35]',
    },
    {
      year: 'Long Term',
      title: 'Open Access',
      description: 'Open source STEM curriculum accessible across India',
      color: 'bg-[#FF6B35]',
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
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl lg:text-7xl text-navy-900 mb-6">
            Our Vision
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            Building the future of STEM education in India
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${index * 400}ms`,
                }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-[#f2f2f0] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4 lg:justify-start">
                      <span className="font-sans text-sm font-semibold uppercase tracking-wider text-[#FF6B35]">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl text-navy-900 font-medium mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-serif text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#f2f2f0] border-4 border-[#FF6B35] flex-shrink-0 shadow-sm" />
                {/* Spacer for other side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
            Ready to Transform Education?
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-8">
            Join us in our mission to bring curiosity driven learning to every student.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('join')}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] text-white text-lg font-medium rounded-xl hover:bg-[#FF6B35] transition-colors"
            >
              Join Nirvana
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#f2f2f0] border-2 border-navy-900 text-navy-900 text-lg font-medium rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}