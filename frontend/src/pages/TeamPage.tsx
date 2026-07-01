import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
interface TeamPageProps {
  onNavigate: (page: string) => void;
}
interface TeamMember {
  name: string;
  role: string;
  image: string;
  achievements: string[];
}
const teamMembers: TeamMember[] = [
  {
    name: 'Shubhranshu Jha',
    role: 'Founder & Lead Mentor',
    image: '/images/team/shubhranshu.jpg',
    achievements: [
      'Trainee @ NASA',
      'Recognized Child Scientist @Gov of India and IIST Chancellor Dr BN Suresh',
      'Recognized by IIT Madras, IIM Mumbai, Stanford DDL',
      'Research @MIT CSAIL, MSU Baroda and IIT Guwahati',
      'Y Combinator SUS Fellow by Jared Friedman and top unicorn founders',
    ],
  },
  {
    name: 'Parikshitsinh Jadeja',
    role: 'Robotics Instructor & Solo Website Dev.',
    image: '/images/team/parikshit.jpg',
    achievements: [
      'Masason Foundation Scholar (10th Generation)',
      'giftedtalented.com 20 Under 20 Honoree',
      'Recognized by SoftBank Founder Masayoshi Son and Nobel Laureate Prof. Shinya Yamanaka',
      'Researcher at MIT CSAIL, IISc Bangalore, and The Maharaja Sayajirao University of Baroda',
      'Recognized by IITs for Research and Innovation in STEM',
    ],
  },
  {
    name: 'Shubh Menon',
    role: 'Head of Marketing',
    image: '/images/team/shubh.jpg',
    achievements: [
      '8x National Hackathon Participant',
      'Recognized by IIT Bombay, IIT Madras, KIIT',
      'INTACH Certified Filmmaker',
      'Public Speaking and Entrepreneurship',
    ],
  },
  {
    name: 'Naman Bagadia',
    role: 'Electronics & Programming Mentor',
    image: '/images/team/naman.jpg',
    achievements: [
      'Owner of Project Numa',
      'WRO Competitor',
      'Recognized by IIT Bombay, IID, Caltech, and Boston Dynamics',
      'Fluent in Python, C++, Java, C#, and embedded systems',
    ],
  },
  {
    name: 'Rudrarajsinh Rana',
    role: 'Socials & Outreach',
    image: '/images/team/rudraraj.jpg',
    achievements: [
      'Active Contributor in Social Service Initiatives',
      'Worked on Government Election Campaigns',
      'Experience in Marketing, Branding, and Public Engagement',
      'Outreach and Communication Specialist',
    ],
  },
  {
    name: 'Chirag Sindhi',
    role: '3D Modelling Mentor',
    image: '/images/team/chirag.jpg',
    achievements: [
      '3D Designer and Game Developer',
      'Recognized by IIT Bombay, IIT Madras, and KIIT',
      '4x International Game Jam Participant',
      'WRO Roboticist',
    ],
  },
  {
    name: 'Sidhant Vora',
    role: 'Accounts team + Hardware Mentor',
    image: '/images/team/sidhant.jpg',
    achievements: [
      'Co-owner of Project Numa',
      'Intuit Certified Bookkeeping Professional.',
      'Developer of AIFin, an AI powered finance and analysis project',
      'Built independent projects in AI, finance, and technology',
    ],
  },
  {
    name: 'Jash Parekh',
    role: ' Social Media and Outreach',
    image: '/images/team/jash.jpg',
    achievements: [
      'INTACH participant and winner',
      'Educational participation at Orlando science centre',
      'Gold Medal in International History Olympiad',
      'Recognised by green mentors',
    ],
  },
];
export function TeamPage(_props: TeamPageProps) {
  return (
    <main className="bg-[#f2f2f0] pt-20">
      <TeamHero />
      <TeamGrid />
      <MoreTeamSection />
      <JoinTeamCTA />
    </main>
  );
}
function TeamHero() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="font-caveat text-5xl lg:text-6xl xl:text-7xl text-navy-900 leading-tight mb-6">
            Our Team
          </h1>
          <p className="font-serif text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Young innovators, mentors, and researchers working together to transform
            STEM education in India.
          </p>
        </div>
      </div>
    </section>
  );
}
function TeamGrid() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="pb-20 lg:pb-32">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="h-full bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:bg-[#f2f2f0] hover:border-[#FF6B35] border border-transparent">
      <div className="flex flex-col sm:flex-row">
        {/* Photo placeholder */}
      <div className="w-full sm:w-1/3 aspect-square overflow-hidden flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
        {/* Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-xl lg:text-2xl text-navy-900 font-medium mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-sm text-[#FF6B35] font-medium">
                {member.role}
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {member.achievements.map((achievement, i) => (
              <li
                key={i}
                className="font-serif text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
function MoreTeamSection() {
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
          <h2 className="font-caveat text-3xl lg:text-4xl text-navy-900 mb-4">
            And Many More
          </h2>
          <p className="font-serif text-xl text-gray-600 leading-relaxed">
            Mentors, Researchers, Innovators, and Volunteers
          </p>
          <p className="font-serif text-gray-500 mt-6">
            Our team includes dedicated educators, industry professionals, and
            passionate volunteers who contribute their time and expertise to
            our mission.
          </p>
        </div>
      </div>
    </section>
  );
}
function JoinTeamCTA() {
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
            Join Our Team
          </h2>
          <p className="font-serif text-lg text-gray-600 mb-8">
            Help us build the future of STEM education in India.
          </p>
          <a
            href="https://forms.gle/RSccdr3cWM6ZyVSeA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white text-lg font-medium rounded-xl hover:bg-[#E55A2B] transition-colors"
          >
            Apply Now
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}