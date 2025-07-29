import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Clock, Code, Star } from 'lucide-react';

import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {


//   const { ref, inView: isInView } = useInView({
//   threshold: 0.1,
//   triggerOnce: true,
// });

  const [ref, isInView] = useInView({
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    // satisfaction: 0
  });

  const targetCounters = {
    projects: 8,
    experience: 5,
    // satisfaction: 100
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters(prev => ({
          projects: Math.min(prev.projects + targetCounters.projects / steps, targetCounters.projects),
          experience: Math.min(prev.experience + targetCounters.experience / steps, targetCounters.experience),
          // satisfaction: Math.min(prev.satisfaction + targetCounters.satisfaction / steps, targetCounters.satisfaction)
        }));
      }, interval);

      setTimeout(() => {
        clearInterval(timer);
        setCounters(targetCounters);
      }, duration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // const skills = [
  //   { name: 'React/Next.js', level: 92, color: 'from-blue-400 to-cyan-400' },
  //   { name: 'TypeScript', level: 88, color: 'from-blue-500 to-indigo-500' },
  //   { name: 'Node.js/Express', level: 85, color: 'from-green-400 to-emerald-400' },
  //   { name: 'Python/Django', level: 78, color: 'from-yellow-400 to-orange-400' },
  //   { name: 'AWS/Cloud', level: 75, color: 'from-orange-400 to-red-400' },
  //   { name: 'MongoDB/PostgreSQL', level: 82, color: 'from-teal-400 to-green-400' },
  //   { name: 'Docker/DevOps', level: 70, color: 'from-violet-400 to-purple-400' },
  //   { name: 'GraphQL/REST', level: 80, color: 'from-pink-400 to-rose-400' }
  // ];

  const skills = [
  { name: 'Java & Spring Boot', level: 95, color: 'from-blue-500 to-indigo-500' },
  { name: 'Hibernate & JPA', level: 90, color: 'from-green-500 to-emerald-500' },
  { name: 'Microservices Architecture', level: 88, color: 'from-cyan-500 to-teal-500' },
  { name: 'RESTful APIs & JWT Security', level: 92, color: 'from-violet-500 to-purple-500' },
  { name: 'MySQL & PostgreSQL', level: 87, color: 'from-orange-400 to-yellow-500' },
  { name: 'ReactJS / Angular', level: 85, color: 'from-pink-500 to-rose-500' },
  { name: 'HTML, CSS & Bootstrap', level: 89, color: 'from-teal-400 to-green-400' },
  { name: 'Docker & CI/CD DevOps', level: 80, color: 'from-indigo-400 to-purple-500' }
];


  const experiences = [
    {
  title: "Java Full Stack Developer",
  company: "Fiserv, Inc, Berkeley Heights, NJ",
  period: "2025 - Present",
  description: "Designing and developing enterprise-grade financial applications using Java, Spring Boot, Hibernate, and React. Building secure RESTful APIs, implementing microservices architecture, and optimizing database solutions with MySQL and PostgreSQL. Collaborating with cross-functional teams to deliver scalable, high-performance solutions.",
  icon: "💻"
},
   {
  title: "Full Stack Java Developer",
  company: "New York Life Insurance Company, Lebanon, NJ",
  period: "Feb 2024 - Jan 2025",
  description: "Engineered enterprise-grade insurance platforms leveraging Java, Spring Boot, Spring MVC, and Angular for end-to-end development. Designed and integrated secure RESTful APIs with JWT authentication and implemented event-driven microservices using Apache Kafka. Optimized MySQL databases for high-volume policy and claim transactions, ensuring scalability and reliability. Collaborated with cross-functional teams to deliver compliant, high-performance solutions within tight deadlines.",
  icon: "🏦"
}
,
    {
  title: "Full Stack Developer - Java ",
  company: "ICICI Bank, Hyderabad, India",
  period: "May 2022 - Jul 2023",
  description: "Re-architected monolithic systems into modular Spring Boot microservices with Spring Cloud, reducing deployment time by 40% and minimizing downtime. Developed responsive banking dashboards using React and Redux to accelerate transaction processing by 35%. Designed secure RESTful APIs for loan approvals and credit evaluations, integrating Spring Boot services with internal scoring engines and third-party platforms. Leveraged AWS EC2, DynamoDB, and Kinesis for scalable, real-time customer policy tracking. Built high-reliability batch jobs migrating 30M+ records with zero data loss. Implemented a Spring MVC validation engine with JasperReports to automate compliance reporting, cutting manual effort by 50%. Optimized asynchronous modules with Java 8 features to boost throughput. Actively contributed in Agile sprints using JIRA to deliver high-quality banking solutions.",
  icon: "🏦"
}
,
{
  title: "Java Developer",
  company: "Bosch, Hyderabad, India",
  period: "Aug 2020 - May 2022",
  description: "Developed RESTful microservices with Spring Boot, deploying them via Docker on AWS EC2 with Kubernetes orchestration to scale Bosch’s connected mobility ecosystem. Optimized Apache Cassandra clusters for high-throughput vehicle telemetry, improving read/write performance by 40%. Built Angular dashboards integrated with backend services for real-time vehicle diagnostics. Designed JMS-based queues for reliable IoT edge-to-cloud communication, enhancing fault tolerance during peak loads. Strengthened CI/CD pipelines with JUnit and Mockito, cutting rollbacks by 30%. Automated firmware log ingestion using shell scripts and PL/SQL, reducing manual validation effort by 60%. Collaborated in Agile teams to deliver high-quality APIs and accelerate cross-team integration.",
  icon: "🚗"
}

  ];
const certifications = [
  {
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Coursera",
    year: "2024",
    icon: "💻",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Oracle Professional Java SE 11 Developer",
    issuer: "Oracle",
    year: "2023",
    icon: "☕",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "☁️",
    color: "from-orange-400 to-yellow-400"
  },
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    issuer: "Coursera",
    year: "2023",
    icon: "🌐",
    color: "from-green-400 to-teal-400"
  },
  {
    title: "Spring Framework and Spring Boot",
    issuer: "LinkedIn Learning",
    year: "2022",
    icon: "🌱",
    color: "from-green-500 to-emerald-500"
  }
];


  const CircularProgress: React.FC<{ percentage: number; color: string; name: string }> = ({ percentage, name }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setAnimatedPercentage(percentage);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isInView, percentage]);

    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <motion.div
        className="flex flex-col items-center group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
      >
        <div className="relative w-24 h-24 mb-3">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-slate-700"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`text-teal-400`} stopColor="currentColor" />
                <stop offset="100%" className={`text-green-400`} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
              {Math.round(animatedPercentage)}%
            </span>
          </div>
        </div>
        <h4 className="text-sm font-medium text-slate-300 text-center group-hover:text-white transition-colors">
          {name}
        </h4>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-teal-400 via-green-400 to-violet-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a passionate Full-Stack Developer with a mission to transform innovative ideas into scalable, 
              user-centric digital experiences. With expertise spanning modern web technologies, I bridge the gap 
              between creative vision and technical excellence.
            </motion.p>
            <motion.p
              className="text-lg text-slate-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My approach combines clean, maintainable code with intuitive user interfaces, ensuring every project 
              not only meets technical requirements but also delivers exceptional user experiences that drive business growth.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { 
              icon: Briefcase, 
              label: 'Projects Completed', 
              value: Math.floor(counters.projects), 
              suffix: '+',
              color: 'from-teal-400 to-green-400',
              description: 'Successful deliveries'
            },
            { 
              icon: Clock, 
              label: 'Years Experience', 
              value: counters.experience.toFixed(1), 
              suffix: '+',
              color: 'from-blue-400 to-violet-400',
              description: 'Professional development'
            },
            // { 
            //   icon: Star, 
            //   label: 'Client Satisfaction', 
            //   // value: Math.floor(counters.satisfaction), 
            //   suffix: '%',
            //   color: 'from-green-400 to-emerald-400',
            //   description: 'Happy clients'
            // }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 group hover:border-teal-400/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-full h-full text-white" />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-slate-300 font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section with Circular Progress */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-teal-400" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <CircularProgress
                key={skill.name}
                percentage={skill.level}
                color={skill.color}
                name={skill.name}
              />
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-teal-400" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`flex items-start gap-6 p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 ${
                  index % 1 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {exp.icon}
                </motion.div>
                <div className='text-left'>
                  <h4 className="text-2xl font-bold text-white mb-2 hover:text-teal-400 transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-teal-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-teal-400" />
              Education
            </h3>
            <div className="space-y-6">
              <motion.div
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h4 className="text-xl font-bold text-white mb-2">Master of Science in Computer Science </h4>
                <p className="text-teal-400 mb-1 font-medium">Pace University, New York, USA </p>
                <p className="text-slate-400">Sep 2023 – May 2025 </p>
                <p className="text-slate-300 mt-2 text-sm">
                  Specialized in Software Engineering and Web Development
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-teal-400" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 cursor-pointer group hover:border-teal-400/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 10px 30px rgba(20, 184, 166, 0.2)" 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-teal-400 text-sm font-medium">{cert.issuer}</p>
                      <p className="text-slate-400 text-xs"></p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

// just make changes by comparing to the given resume.Without any another functional disturbance