import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ContactForm } from '../components/ContactForm';
export function ContactPage() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  return (
    <main className="bg-[#f2f2f0] pt-20">
      <section className="section-padding">
        <div
          ref={ref}
          className={`container-wide transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="font-caveat text-5xl lg:text-6xl xl:text-7xl text-navy-900 leading-tight mb-4">
              Contact Us
            </h1>
            <p className="font-serif text-xl lg:text-2xl text-gray-600 mb-12">
              We'd love to hear from you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}