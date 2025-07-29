
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download,  Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Java Full Stack Developer – 5+ Years of Experience',
    'Spring Boot | React | Cloud-Native Microservices',
    'Secure APIs, Real-Time Systems & Scalable Apps',
    'Transforming Financial Platforms with Tech'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));

        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ...existing animated background code remains unchanged... */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2  border border-none rounded-full text-teal-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
              >
                {/* <Sparkles className="w-4 h-4" /> */}
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-teal-400 via-green-400 to-violet-400 bg-clip-text text-transparent">
                Abhishek Kasula
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-3xl text-slate-300 mb-8 h-20 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="inline-block">
                {currentText}
                <motion.span
                  className="inline-block w-1 h-8 md:h-10 bg-teal-400 ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              A results-driven full-stack developer specializing in Java, Spring Boot, React, and Cloud-Native Microservices.
              I help modernize enterprise platforms in finance, banking, and insurance with scalable, secure, and high-performance applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 via-green-500 to-violet-500 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                View My Work
              </motion.button>

              <motion.a
                href="/images/resume_abhishek_kasula.pdf"
                download
                className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15,-15,0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  
                  <Download className="w-5 h-5" />
                </motion.div>
                Download Resume
              </motion.a>
            </motion.div>
{/* 
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
               
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/abhishek-kasula-b6ba84185",
                  label: "LinkedIn",
                  color: "hover:text-blue-400"
                },
                {
                  icon: Mail,
                  label: "Email",
                  color: "hover:text-green-400"
                }
              ].map(({ icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-400 ${color} transition-all duration-300 border border-slate-700/50 hover:border-teal-400/50`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div> */}


<motion.div
  className="flex items-center justify-center lg:justify-start gap-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.3 }}
>
  {[
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/abhishek-kasula-b6ba84185",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:abhishek.kasula@gmail.com", // Replace with your email
      label: "Email",
      color: "hover:text-green-400"
    }
  ].map(({ icon: Icon, href, label, color }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-400 ${color} transition-all duration-300 border border-slate-700/50 hover:border-teal-400/50`}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  ))}
</motion.div>

          </div>


          {/* Right Content - Profile Image 40% */}
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
            >
              {/* Background Effects */}
              <motion.div
                className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-teal-400/20 via-green-400/20 to-violet-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="absolute inset-4 w-72 h-72 bg-gradient-to-r from-violet-400/30 to-magenta-400/30 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Profile Image Container */}
              {/* <motion.div
                className="relative w-80 h-120 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-400 via-green-400 to-violet-400 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                src="images\ABHISHEK KASULA.png"
                  alt="Abhishek - Full Stack Developer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </motion.div> */}

<div className="w-88 h-128 perspective flip-card">
  <div className="flip-card-inner">
    {/* Front Side */}
    <div className="absolute w-full h-full backface-hidden flex items-center justify-center border-4 border-blue rounded-full">
      <img
        src="images/ABHISHEK KASULA.png"
        alt="Front"
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    {/* Back Side */}
    <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center border-4 border-blue-400 rounded-full">
      <img
        src="images/MaroonProfilePic.png"
        alt="Back"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</div>


              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full shadow-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400 rounded-full shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [360, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full shadow-lg"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    
    </section>
    
  );
  
};

export default Hero;


<style>
    {`
      .perspective {
  perspective: 1000px;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
}

    `}
  </style>