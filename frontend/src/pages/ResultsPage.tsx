import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ResultsPageProps {
  onNavigate: (page: string) => void;
}

export function ResultsPage(_props: ResultsPageProps) {
  return (
    <main className="bg-[#f2f2f0] pt-20">
      <ResultsHero />
      <EarlyImpactSection />
      <CompetitionsSection />
    </main>
  );
}

function ResultsHero() {
  return (
    <section className="pt-4 pb-0">
      <div className="container-wide text-center">
        <h1 className="highlight-heading font-caveat text-6xl lg:text-8xl text-navy-900 mb-6">
          Results & Opportunities
        </h1>

        <p className="font-serif text-xl text-gray-600 max-w-4xl mx-auto">
          From olympiads and robotics competitions to international research
          fairs and innovation challenges, we help students develop the skills
          needed to compete and succeed on global stages.Students mentored by members of our team have earned recognition
            through opportunities including the British Council STEM Award and
            the National Standard Examination pathway.
          
        </p>
      </div>
    </section>
  );
}

function EarlyImpactSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const stats = [
    { value: 'British Council', label: 'STEM Award' },
    { value: "NSE '26", label: 'National Science Examination' },
    { value: '50+', label: 'Students Reached' },
    { value: '4', label: 'NGO Partners' },
  ];

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="font-caveat text-4xl lg:text-5xl text-[#FF6B35] mb-3">
                  {stat.value}
                </div>

                <div className="font-serif text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitionsSection() {
  const competitions = [
    '/images/competitions/wro.jpg',
    '/images/competitions/ftc.jpg',
    '/images/competitions/vex.jpg',
    '/images/competitions/robocup.jpg',
    '/images/competitions/isef.jpg',
    '/images/competitions/conrad.jpg',
    '/images/competitions/iris.jpg',
    '/images/competitions/jmt.jpg',
    '/images/competitions/siwp.jpg',
    '/images/competitions/nasa.jpg',
  ];

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-wide">

        <div className="text-center mb-12">
          <h2 className="highlight-heading font-caveat text-5xl lg:text-6xl text-navy-900 mb-6">
            Competitions & Innovation Challenges
          </h2>

          <p className="font-serif text-lg text-gray-600 max-w-5xl mx-auto">
            Students receive mentorship, project support, and preparation for prestigious opportunities including WRO, FIRST LEGO League, FIRST Tech Challenge, VEX Robotics, RoboCup Junior, ISEF, Conrad Challenge, IRIS National Fair, Junior Makeathon, Stockholm International Water Prize, NASA Space Apps Challenge, and more.
          </p>
        </div>

        <div className="overflow-hidden mt-12">
          <div className="flex items-center gap-20 animate-marquee-left">
            {[...competitions, ...competitions].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Competition"
                className="h-28 lg:h-40 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}