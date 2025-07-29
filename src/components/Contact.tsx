import React, { useState} from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, ArrowUp, MessageSquare, Calendar, Coffee } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { ref, inView: isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createConfetti = () => {
    const colors = ['#14B8A6', '#10B981', '#8B5CF6', '#3B82F6', '#EC4899'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = confetti.style.width;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '9999';
      confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2}s linear forwards`;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 4000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      createConfetti();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abhishekkasula49@gmail.com',
    // href: 'mailto:abhishekkasula49@gmail.com',
    color: 'from-teal-400 to-green-400'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (848) 308-9564',
    // href: 'tel:+18483089564',
    color: 'from-blue-400 to-violet-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Edison, NJ',
    // href: 'https://www.google.com/maps/place/Edison,+NJ',
    color: 'from-violet-400 to-magenta-400'
  }
];



  const quickActions = [
  {
    icon: MessageSquare,
    title: 'Quick Chat',
    description: 'Let\'s discuss your project',
action: null
  },
  {
    icon: Calendar,
    title: 'Schedule Meeting',
    description: 'Book a consultation call',
action: null
  },
  {
    icon: Coffee,
    title: 'Coffee Chat',
    description: 'Casual project discussion',
    action: null

    // action: () => window.open('mailto:abhishekkasula49@gmail.com?subject=Coffee Chat', '_blank')
  }
];

const handleQuickActionClick = () => {
  alert('📬 Please fill the form below to communicate.');
};

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/30 to-teal-900/30 relative overflow-hidden" ref={ref}>
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-violet-400 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/10 border border-teal-400/30 rounded-full text-teal-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
            >
              <Mail className="w-4 h-4" />
              Let's Connect
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-teal-400 via-green-400 to-violet-400 bg-clip-text text-transparent">Collaborate?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Let's bring your vision to life! Whether you have a project in mind or just want to explore possibilities, 
              I'm here to help you create something extraordinary.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                onClick={handleQuickActionClick}

                // onClick={action.action}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 text-left group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-400/30 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <action.icon className="w-6 h-6 text-teal-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-slate-400 text-sm">{action.description}</p>
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    // href={info.href}
                    className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-teal-400/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                      <p className="text-white font-semibold text-lg group-hover:text-teal-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="p-8 bg-gradient-to-br from-teal-400/10 via-green-400/10 to-violet-400/10 rounded-2xl border border-teal-400/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-violet-400/5"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Available for Projects</h4>
                <p className="text-slate-300 leading-relaxed relative z-10">
                  I'm currently accepting new projects and would love to hear about your ideas. 
                  Let's create something extraordinary together! Response time: within 24 hours.
                </p>
                <motion.div
                  className="flex items-center gap-2 mt-4 text-teal-400 relative z-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available Now</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:bg-slate-800/70 transition-all duration-300 peer"
                      placeholder="Your Name"
                    />
                    <motion.label
                      className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 transition-all duration-300"
                      animate={{ y: formData.name ? 0 : 0 }}
                    >
                      Your Name
                    </motion.label>
                  </motion.div>

                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:bg-slate-800/70 transition-all duration-300 peer"
                      placeholder="Your Email"
                    />
                    <motion.label
                      className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 transition-all duration-300"
                    >
                      Your Email
                    </motion.label>
                  </motion.div>
                </div>

                <motion.div
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:bg-slate-800/70 transition-all duration-300 peer"
                    placeholder="Subject"
                  />
                  <motion.label
                    className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 transition-all duration-300"
                  >
                    Subject
                  </motion.label>
                </motion.div>

                <motion.div
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-teal-400 focus:bg-slate-800/70 transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                  />
                  <motion.label
                    className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 transition-all duration-300"
                  >
                    Your Message
                  </motion.label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 via-green-500 to-violet-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {formStatus === 'sending' && (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  )}
                  {formStatus === 'idle' && <Send className="w-5 h-5" />}
                  {formStatus === 'error' && <Send className="w-5 h-5" />}
                  
                  <span className="relative z-10">
                    {formStatus === 'sending' && 'Sending Message...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'error' && 'Try Again'}
                  </span>
                </motion.button>
              </form>

              {formStatus === 'success' && (
                <motion.div
                  className="mt-6 p-6 bg-green-400/20 border border-green-400/50 rounded-xl text-green-400 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2">🎉 Thank you!</h4>
                    <p>Your message has been sent successfully. I'll get back to you within 24 hours!</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-0 left-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.p
              className="text-slate-400 mb-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              © 2025 Abhishek Kasula. All rights reserved.
            </motion.p>
            <motion.p
              className="text-slate-500 text-sm flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
Feel free to reach out—let’s grow together              
            </motion.p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </motion.button>
      )}

      <style >{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotateZ(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;