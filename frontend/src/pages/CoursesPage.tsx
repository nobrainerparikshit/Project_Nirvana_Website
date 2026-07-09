interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  return (
    <>
<section className="py-24 border-b border-black/10">
<div className="max-w-5xl mx-auto px-6">
<p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-5">
      Learn
</p>
<h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
      Courses &
<br />
      Modules
</h1>
<p className="max-w-3xl font-serif text-xl leading-9 text-black/70">
      Learn artificial intelligence, robotics, programming, mathematics,
      research, and emerging technologies through structured,
      project-based learning. Every course is built around practical
      experience, real engineering problems, and first-principles
      thinking.
</p>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-5">
Philosophy
</p>
<h2 className="font-serif text-4xl mb-10">
Learn by Building.
</h2>
<p className="max-w-3xl font-serif text-lg leading-9 text-black/75">
    Most courses teach concepts first and applications later.
    Project Nirvana takes the opposite approach.
    Every lesson begins with a real problem, followed by the
    fundamental concepts, practical implementation, and finally
    a complete project. The objective is not simply to memorize
    information, but to develop intuition, engineering thinking,
    and the confidence to build independently.
</p>
</div>
</section>

<section>
<div className="max-w-6xl mx-auto px-6">
<p>Course Library</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Artificial Intelligence
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Explore the foundations of modern artificial intelligence, from search
    algorithms and intelligent agents to generative AI, large language
    models, computer vision, and real-world AI applications.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Machine Learning
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Learn supervised, unsupervised, and reinforcement learning while
    understanding the mathematics behind modern predictive models and
    intelligent decision-making systems.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Robotics
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Design intelligent robots using Arduino, ESP32, ROS, sensors,
    actuators, embedded systems, autonomous navigation, and computer
    vision.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Programming
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Master Python, C++, JavaScript, and TypeScript while developing
    software engineering skills through practical coding projects.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Mathematics
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Develop mathematical intuition through calculus, linear algebra,
    probability, statistics, optimization, and discrete mathematics.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Research Methodology
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Learn how to conduct scientific research, perform literature reviews,
    write papers, analyze results, and publish impactful work.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    AI Ethics
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Explore fairness, transparency, privacy, governance, safety, and the
    societal impact of artificial intelligence and emerging technologies.
</p>
<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

<div className="border border-black/10 p-8 hover:-translate-y-1 transition-all duration-300">
<h3 className="font-serif text-2xl mb-4">
    Bioengineering & Neuroscience
</h3>
<p className="font-serif leading-8 text-black/70 mb-6">
    Discover how AI intersects with biology, neuroscience, medicine, and
    biomedical engineering to solve healthcare challenges.
</p>

<p className="text-sm uppercase tracking-widest text-black/40">
    Coming Soon
</p>
</div>

</div>
</div>
</section>

<section className="py-24">

<div className="max-w-5xl mx-auto px-6">
<p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-8">
      Every Course Includes
</p>
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="font-serif text-2xl mb-3">
          Conceptual Learning
</h3>
<p className="font-serif leading-8 text-black/70">
          Develop a strong understanding of the theory behind every topic
          before moving into implementation.
</p>
</div>

<div>
<h3 className="font-serif text-2xl mb-3">
          Hands-on Projects
</h3>
<p className="font-serif leading-8 text-black/70">
          Apply every lesson through practical engineering projects
          inspired by real-world applications.
</p>
</div>

<div>
<h3 className="font-serif text-2xl mb-3">
          Research Papers
</h3>
<p className="font-serif leading-8 text-black/70">
          Learn directly from landmark publications and understand how
          modern scientific research is conducted.
</p>
</div>

<div>
<h3 className="font-serif text-2xl mb-3">
          Coding Exercises
</h3>
<p className="font-serif leading-8 text-black/70">
          Reinforce concepts through guided programming exercises,
          engineering challenges, and assessments.
</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/10">
<div className="max-w-5xl mx-auto px-6">
<p className="text-sm uppercase tracking-[0.35em] text-black/50 mb-6">
      Modules
</p>
<h2 className="font-serif text-4xl mb-6">
      Individual Learning Modules
</h2>
<p className="max-w-3xl font-serif text-lg leading-9 text-black/70">
      Every course will eventually be divided into structured modules,
      combining lessons, coding exercises, downloadable resources,
      practical projects, quizzes, and research readings.

      Module pages are currently under development and will be released
      progressively.
</p>
</div>
</section>

</>
  );
}