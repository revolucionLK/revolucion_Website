import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Check, Zap, Bot, Shield, Users, MessageSquare, Brain, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useTawkTo from '../hooks/useTawkTo';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

function PricingCard({ title, price, description, features, isPopular }: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl ${isPopular
        ? 'bg-gradient-to-br from-[#67fcda]-900 to-black border-2 border-[#67fcda]-400'
        : 'bg-black/90 border border-[#67fcda]-900'
      } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#67fcda]-400 to-emerald-400 text-black px-6 py-1.5 rounded-full text-sm font-medium shadow-lg">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-[#67fcda]-400">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
        {price !== 'Custom' && <span className="ml-1 text-[#67fcda]-400">/month</span>}
      </div>
      <p className="mt-4 text-white-400">{description}</p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-[#67fcda]-400 mr-3 flex-shrink-0" />
            <span className="text-white-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-3.5 px-4 rounded-xl font-semibold ${isPopular
          ? 'bg-gradient-to-r from-[#67fcda]-400 to-emerald-400 text-black hover:from-[#67fcda]-500 hover:to-emerald-500'
          : 'bg-green-900/20 text-[#67fcda]-400 hover:bg-[#67fcda]-900/40 border border-[#67fcda]-800'
        } transition-all duration-300 transform hover:scale-[1.02]`}>
        Start 14-day free trial
      </button>
    </div>
  );
}

function LandingPage() {
  useTawkTo();

  const testimonials = [
    {
      text: "The way we manage our client interactions has been totally changed by this CRM. AI-powered insights are transformative.",
      author: "John Miller",
      role: "Director of Marketing",
      image: "/assets/images/1.png"
    },
    {
      text: "The platform is a vital tool for our sales team due to its robust features and ease of use. Highly recommended!",
      author: "David Adams",
      role: "Sales Manager",
      image: "/assets/images/2.png"
    },
    {
      text: "Since we started using this CRM, we have seen tremendous growth in our customer connections. It is highly reliable, safe, and quick.",
      author: "Michael Roberts",
      role: "Executive in Business Development",
      image: "/assets/images/3.png"
    },
    {
      text: "As a small business owner, I've found this CRM to be a valuable tool for keeping track of clients and improving efficiency.",
      author: "Emma Williams",
      role: "CEO and Founder",
      image: "/assets/images/4.png"
    },
    {
      text: "The security features and personalised feedback from clients are exactly what our team needed to take our business to the next level.",
      author: "Sophia Martinez",
      role: "Manager of Customer Relations",
      image: "/assets/images/5.png"
    },
    {
      text: "The continuous help is excellent! Knowing that aid is only a click away whenever I need it gives me continuous reassurance",
      author: "Olivia Johnson",
      role: "Operations Manager",
      image: "/assets/images/6.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-52 px-4 pb-60">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col items-center justify-center text-center ml-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Boost Your Company with AI-Powered CRM Intelligence
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Use AI-driven solutions to change your customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/#contact">
                  <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Get Started
                  </button>
                </a>
                <a href="/dashboard">
                  <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-colors">
                    Book Demo
                  </button>
                </a>
                
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <img
                src="/assets/images/dashboard5.png"
                alt="Image 2"
                className="w-250 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--primary)" }}>
        <div className="container mx-auto">
          {/* First Row - Heading & Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features to Transform Your CRM
            </h2>
            <p className="text-xl md:text-2xl text-white-100 max-w-3xl mx-auto">
              Develop advanced artificial intelligence tools, automation, and real-time updates to improve customer engagement, simplify processes, and foster business growth.
            </p>
          </div>

          {/* Second Row - 3 Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Advanced Analytics</h3>
              <p className="text-gray-300 text-center">
                Use real-time dashboards and predictive analytics to get deep insights into sales success and customer behaviour.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Smart Communication</h3>
              <p className="text-gray-300 text-center">
                Use solutions powered by AI to automate and customise customer interactions via chat, email, and social media.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Insights</h3>
              <p className="text-gray-300 text-center">
                Get actual time data as well as actionable suggestions to maximise your marketing and sales efforts.
              </p>
            </div>
          </div>

          {/* Third Row - Feature, Image, Feature */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Automation</h3>
              <p className="text-gray-300 text-center">
                To save time and boost efficiency, automate activities like data input, follow-ups, and lead scoring.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/assets/images/dashboard7.png"
                alt="CRM Dashboard"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-effect">
              <div className="flex items-center justify-center mb-6">
                <Bot className="w-16 h-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Integration</h3>
              <p className="text-gray-300 text-center">
                Create a uniform workflow by combining with your current platforms and tools.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-opacity-50 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Unlock Customer Relationship Management's Future</h2>
          <p className="text-xl md:text-2xl text-white-100 max-w-3xl mx-auto"><center>AI's ability to manage processes, raise customer satisfaction, and make wise decisions that lead to over time company success.</center></p><br /><br />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-secondary" />,
                title: "Quick Speed ",
                description: "AI-powered automation and smooth integration provide unrivalled speed, guaranteeing immediate reactions and effective workflows."
              },
              {
                icon: <Shield className="h-6 w-6 text-secondary" />,
                title: "Business Security",
                description: "With us, your data is secure. To secure your company and client data, we use the best encryption and security measures available."
              },
              {
                icon: <Users className="h-6 w-6 text-secondary" />,
                title: "Team Collaboration",
                description: "Advanced teamwork with tools for communication, task management, and real-time data sharing that promote collaboration and produce results."
              },
              {
                icon: <Clock className="h-6 w-6 text-secondary" />,
                title: "24/7 Support",
                description: "You never have to face difficulties alone since our dedicated support staff is always here to help, and your CRM always works properly."
              }
            ].map((item, index) => (
              <div key={index} className="glass-effect p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 ml-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our First Priority: Your Data, Incomparable Safety for Your Company</h2>
              <p className="text-lg text-gray-300 mb-6">
                You can relax knowing that your personal data and company information remains secure thanks to the highest security standards rooted into our AI-powered CRM platform.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced Encryption",
                  "Frequent audits of security",
                  "Access control based on roles",
                  "Redundancy and Backup of Data",
                  "Conform to Industry Standards"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/dashboard2.png"
                alt="CRM Security & Compliance"
                className="max-w-md w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-opacity-50 bg-black overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 testimonials-container">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="testimonial-item glass-effect p-8"
              >
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-secondary opacity-20">"</div>
                  <div className="testimonial-content">
                    <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full border-2 border-secondary"
                      />
                      <div>
                        <p className="font-semibold text-secondary">{testimonial.author}</p>
                        <p className="text-gray-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="min-h-screen bg-gradient-to-br from-black via-[#67fcda] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#fff] sm:text-5xl lg:text-6xl">
              Pricing Plans
            </h2>
            <p className="mt-6 text-xl text-white-400 max-w-2xl mx-auto">
              Whatever your business, we offer custom rates with strong CRM features to support your growth. Choose the plan that best suits your budgetary constraints and goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Basic"
              price="$10"
              description="Perfect for small businesses getting started with AI-powered CRM"
              features={[
                "Automation driven by AI for small teams",
                "Basic reporting and analytics",
                "Chat and email assistance",
                "The encryption of data securely"
              ]}
            />

            <PricingCard
              title="Pro"
              price="$19"
              description="Advanced features for growing businesses"
              features={[
                "Advanced data analysis and insights powered by AI",
                "Dashboards and reports that are customised",
                "Tools for team cooperation",
                "Automated workflow and task management",
                "Priority Support"
              ]}
              isPopular
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Custom solutions for large organizations"
              features={[
                "Everything in Pro",
                "Custom AI Models",
                "Dedicated account manager with constantly priority assistance",
                "Redundancy and data backup",
                "24/7 Premium Support"
              ]}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-opacity-50 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What differentiates your AI-powered CRM from others?",
                a: "Our AI-powered CRM offers predictive analytics, automated workflows, and more intelligent insights through the use of advanced machine learning algorithms. This allows you to use data-driven decision-making to promote growth, enhance team collaboration, and personalise customer experiences."
              },
              {
                q: "How safe is your CRM platform for my data?",
                a: "We take the security of your data very seriously. To keep your data, our platform employs two-factor authentication, leading the way in encryption, and frequent security audits. We also adhere to global standards such as GDPR and HIPAA to assure confidentiality of your data."
              },
              {
                q: "Is it possible to link your CRM with other programs and tools?",
                a: "Indeed! Many well-known tools, like email marketing platforms, project management software, and ERP systems, can be easily integrated with our CRM. We also provide API access for unique integrations made to fit the needs of your business."
              },
              {
                q: "How can my marketing and sales teams profit from the AI functionality?",
                a: "Our AI engine assists marketing and sales teams by finding high-potential leads, automating repetitive procedures, and offering insightful data on consumer behaviour. Your team may focus on significant impact jobs while the AI takes care of the rest, which could boost sales and make initiatives more successful."
              },
              {
                q: "Can I get help from customer service if I need it?",
                a: "Of course! We continuously provide phone, chat, and email customer service to help you with any problems or queries you might have. Our committed support staff are on hand at all times to assist you with making the most of our platform."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group glass-effect transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-xl font-semibold pr-6">{faq.q}</h3>
                  <div className="text-secondary transition-transform duration-300 group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="p-6 pt-0">
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Are You Able to Change the Way You Work? Let's start!</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Utilise our AI-powered CRM to realise the full potential of your client connections. Get started now to enjoy more intelligent processes, profound insights, and smooth expansion. Start the process of transforming your company.
          </p>
          <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">We'd Love to Hear from You!</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Do you need help or have questions? Our team is available to assist. Get in touch with us at any moment to talk regarding the way our AI-powered CRM solutions can help you grow your business.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-[80%] mx-auto">
            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">410 Travis St,<br /> Houston, <br />TX 77002, <br />United States</p>
            </div>

            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">support@revolucion.lk</p>
            </div>

            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 346-512-2568</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[80%] mx-auto">
            <div className="contact-image rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/contact-us.png"
                alt="Contact Us"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="contact-form glass-effect p-8 rounded-lg">
              <form id="contactForm">
                <div className="form-group mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 glass-effect">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 ml-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/assets/images/Logo.png"
                  alt="logo"
                  className="w-30 h-20"
                />
              </div>
              <p className="text-gray-300">
                Grow the business you own with AI-powered CRM systems that improve customer connections, expedite processes, and inspire growth. start improving your company right now.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.youtube.com/@Revolucion_lk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://x.com/revolucion_lk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/revolucionn/" target="_blank" rel="noopener noreferrer" className="text-gray-300 ">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://revolucion.quora.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <img
                    src="/assets/images/Quora1.png"
                    alt="Quora"
                    className="w-9 h-9 hover:opacity-180 transition-opacity"
                  />
                </a>
                <a href="https://www.crunchbase.com/organization/revolucion-1193" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <img
                    src="/assets/images/cb.png"
                    alt="Quora"
                    className="w-9 h-9"
                  />
                </a>
                <a href="https://www.f6s.com/revolucion.lk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                  <img
                    src="/assets/images/f6s.png"
                    alt="Quora"
                    className="w-9 h-9"
                  />
                </a>
              </div>
            </div>
            <div className="ml-20">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="https://revolucion.lk" className="text-gray-300 hover:text-secondary">Home</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-secondary">Solutions</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-secondary">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-secondary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  support@revolucion.lk
                </li>
                <br />
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0112 423 162
                </li>
                <br />
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  152 Aluthmawatha Rd, <br />Colombo 00015
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-secondary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-gray-300 hover:text-secondary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Revolucion.lk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage; 