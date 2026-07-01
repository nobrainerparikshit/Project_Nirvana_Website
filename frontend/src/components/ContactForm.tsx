import { useState } from 'react';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
  variant?: 'default' | 'compact';
}

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/xdarnokv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }

  setIsSubmitting(false);
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (variant === 'compact') {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
        <h3 className="font-caveat text-3xl text-navy-900 mb-6">Get in Touch</h3>

        <div className="flex flex-col gap-4 mb-8">
          <a
            href="mailto:projectnirvanaindia@gmail.com"
            className="flex items-center gap-3 text-navy-700 hover:text-[#FF6B35] transition-colors"
          >
            <Mail size={18} />
            <span className="font-serif">projectnirvanaindia@gmail.com</span>
          </a>
          <a
            href="https://wa.me/9185111010269"
            className="flex items-center gap-3 text-navy-700 hover:text-[#FF6B35] transition-colors"
          >
            <Phone size={18} />
            <span className="font-serif">+91 8511010269</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B35] text-white font-medium rounded-lg hover:bg-[#FF6B35] transition-colors disabled:opacity-60"
          >
            {isSubmitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : isSubmitted ? (
              'Message Sent!'
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Contact Info */}
      <div>
        <h2 className="font-caveat text-4xl lg:text-5xl text-navy-900 mb-4">
          Let's Connect
        </h2>
        <p className="font-serif text-lg text-gray-600 mb-8 leading-relaxed">
          Whether you're a student, parent, school, NGO, or potential partner,
          we'd love to hear from you. Reach out and let's discuss how we can
          work together to transform STEM education.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FF6B35]-50 flex items-center justify-center flex-shrink-0">
              <Mail className="text-[#FF6B35]" size={22} />
            </div>
            <div>
              <h4 className="font-sans font-medium text-navy-900 mb-1">Email</h4>
              <a
                href="mailto:projectnirvanaindia@gmail.com"
                className="font-serif text-gray-600 hover:text-[#FF6B35] transition-colors"
              >
                projectnirvanaindia@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FF6B35]-50 flex items-center justify-center flex-shrink-0">
              <Phone className="text-[#FF6B35]" size={22} />
            </div>
            <div>
              <h4 className="font-sans font-medium text-[#FF6B35] mb-1">WhatsApp</h4>
              <a
                href="https://wa.me/9185111010269"
                className="font-serif text-gray-600 hover:text-[#FF6B35] transition-colors"
              >
                +91 8511010269
              </a>
            </div>
          </div>
        </div>

{/* Social Links */}
<div className="mt-10">
<h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
    Follow Us
</h4>
<div className="flex gap-4">
    {[
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/project_nirvanaindia/',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/the-project-nirvana/',
      },
    ].map((social) => (
<a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-navy-900 hover:bg-[#FF6B35] hover:text-white transition-colors"
      >
        {social.name}
</a>
    ))}
</div>
</div>

      {/* Form */}
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors"
            >
              <option value="">Select a topic</option>
              <option value="student">Student Enrollment</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="volunteer">Volunteer Opportunity</option>
              <option value="media">Media / Press</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#f2f2f0] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B35] font-serif transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#FF6B35] text-white font-medium rounded-lg hover:bg-[#FF6B35] transition-colors disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              'Message Sent Successfully!'
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
