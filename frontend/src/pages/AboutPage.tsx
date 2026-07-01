import { useScrollAnimation } from '../hooks/useScrollAnimation';
interface AboutPageProps {
  onNavigate: (page: string) => void;
}
export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main className="bg-[#f2f2f0] pt-20">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutImpact />
      <AboutCTA onNavigate={onNavigate} />
    </main>
  );
}
function AboutHero() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-caveat text-5xl lg:text-6xl xl:text-7xl text-navy-900 leading-tight mb-8">
            We Are Teenagers Building The Future Of Education
          </h1>
          <p className="font-serif text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A youth led initiative transforming how students learn, innovate, and create.
          </p>
        </div>
      </div>
    </section>
  );
}
function AboutStory() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding bg-gray-50">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about/6.jpg"
              alt="Project Nirvana Students"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Story */}
          <div className="font-serif text-lg text-gray-700 space-y-6 leading-relaxed">
            <div className="gradient-line w-16 mb-6" />
            <p>
              It started with a simple observation. A group of students from
              Vadodara recognized that students were memorizing concepts instead
              of truly understanding them. Science labs existed but remained unused.
              Innovation potential was everywhere, but guidance was nowhere to be found.
            </p>
            <p className="text-xl text-navy-900 font-medium">
              We asked ourselves: What if we could change that?
            </p>
            <p>
              Project Nirvana was born from that question. We set out to create
              a platform that makes world class STEM education, innovation,
              research exposure, and mentorship accessible to all students,
              regardless of their socioeconomic background.
            </p>
            <p>
              Today, we're building what we wished we had when we were younger:
              a community where curiosity is celebrated, hands on learning is
              the norm, and every student has the opportunity to become an innovator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutValues() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const values = [
    {
      title: 'Social Impact',
      description:
        'We believe quality STEM education should be accessible to every student, regardless of their background or location.',
    },
    {
      title: 'Innovation',
      description:
        'We foster creativity and problem solving, encouraging students to think beyond textbooks and build real solutions.',
    },
    {
      title: 'Accessibility',
      description:
        'Our programs reach both urban and rural communities, bridging the gap in educational opportunities.',
    },
    {
      title: 'Curiosity Driven Learning',
      description:
        'We replace rote memorization with exploration, inquiry, and hands on discovery.',
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
            What We Stand For
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 lg:p-10 rounded-2xl bg-[#f2f2f0] border border-gray-100 hover:shadow-lg hover:border-[#FF6B35] transition-all"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#f2f2f0] text-[#FF6B35] flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                <span className="font-caveat text-2xl">{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-navy-900 font-medium mb-3">
                {value.title}
              </h3>
              <p className="font-serif text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function AboutImpact() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const impacts = [
    {
      stat: '4',
      label: 'NGO Partners',
      description: 'Collaborating with organizations across Vadodara',
    },
    {
      stat: '50+',
      label: 'Students Mentored',
      description: 'Direct hands on mentorship in STEM',
    },
    {
      stat: '6 to 10',
      label: 'Grade Range',
      description: 'Focused on foundational years',
    },
    {
      stat: '2',
      label: 'Active Programs',
      description: 'Urban and rural initiatives',
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
            Our Impact So Far
          </h2>
          <p className="font-serif text-lg text-gray-400 max-w-2xl mx-auto">
            Building momentum toward a larger vision
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.label}
              className="text-center p-6"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="font-caveat text-5xl lg:text-6xl text-[#FF6B35] mb-2">
                {impact.stat}
              </div>
              <div className="font-serif font-medium mb-2">{impact.label}</div>
              <div className="font-serif text-sm text-gray-500">
                {impact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function AboutCTA({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
            Join Our Mission
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-8">
            Whether you're a student, parent, educator, or potential partner,
            we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('join')}
              className="px-8 py-4 bg-[#FF6B35] text-white text-lg font-medium rounded-xl hover:bg-[#FF6B35] transition-colors"
            >
              Join Nirvana
            </button>
            <button
              onClick={() => onNavigate('team')}
              className="px-8 py-4 bg-[#f2f2f0] border-2 border-navy-900 text-navy-900 text-lg font-medium rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}