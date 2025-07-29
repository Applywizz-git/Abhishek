import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import {  ArrowRight, Star, Eye, Code2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects: React.FC = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, threshold: 0.1 });


  const { ref, inView: isInView } = useInView({
  threshold: 0.1,
  triggerOnce: true,
});

const projects = [
  {
    id: 1,
    title: "Real-Time Payment Microservices Platform",
    description:
"Developed event-driven Spring Boot microservices containerized with Docker and deployed on GCP Kubernetes, leveraging optimized autoscaling to handle 2x transactional load while meeting SLA response times. Implemented secure API layers with OAuth2, Spring Security, and Apache Camel, enabling standardized B2B authentication and ensuring full compliance in internal audit evaluations.",
    image:
      "images/payment.jpg",
    tech: [
      "Spring Boot",
      "Docker",
      "GCP Kubernetes",
      "OAuth2",
      "Apache Camel",
      "CI/CD",
    ],
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    // stats: { views: "3.9K", stars: 72, forks: 18 },
  },
  {
    id: 2,
    title: "Cloud-Native Claims & Policy Workflow System",
    description:
"Engineered a microservices-based insurance claim and policy processing system using Spring Boot deployed on Azure Functions, providing elastic scaling for concurrent agent and client traffic. Delivered dynamic single-page applications with React and Angular routing integrated via RESTful APIs, streamlining underwriter workflows and reducing UI load times by over 35%.",    image:
      "images/cloud.png",
    tech: [
      "Spring Boot",
      "Azure Functions",
      "React",
      "Angular Routing",
      "REST APIs",
      "CI/CD",
    ],
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    // stats: { views: "3.5K", stars: 65, forks: 20 },
  },
  {
    id: 3,
    title: "Connected Vehicle Telemetry & Diagnostics Platform",
    description:
"Developed a telemetry platform with Spring Boot microservices deployed via Docker and Kubernetes on AWS EC2, enabling scalable real-time data capture from global automotive edge devices. Modeled high-throughput sensor data in Apache Cassandra and delivered interactive diagnostics through Angular dashboards. Ensured data integrity with JMS-based workflows and PL/SQL-driven Jenkins pipelines, automating nightly validations and enhancing system reliability.",
    image:
      "images/connected-car.jpg",
    tech: [
      "Spring Boot",
      "AWS EC2",
      "Apache Cassandra",
      "Angular",
      "JMS",
      "Jenkins",
    ],
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    // stats: { views: "2.7K", stars: 52, forks: 14 },
    Onprogress: "completed"
  },

  {
  id: 4,
  title: "Student Placement Management System",
  description:
"Developing a full-stack college placement management system using Java, Spring Boot, MySQL, HTML, CSS, and Bootstrap to streamline the end-to-end placement workflow. Enabled administrators to manage company profiles and recruitment drives, while allowing students to register and track applications in real time. Implementing secure role-based access, dynamic dashboards, and automated candidate shortlisting features, ensuring smooth coordination between students, recruiters, and the placement cell.",
  image:
    "images/student.png",
  tech: [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT Auth",
    "Tailwind CSS",
  ],
  OnProgress:"Onprogress",
  github: "https://github.com/yourusername/placement-portal", // replace with real link
  live: "https://placement-portal.vercel.app", // replace with real link
  featured: false,
  stats: { views: "1.2K", stars: 18, forks: 5 },
}

];


  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-Commerce Platform",
  //     description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, real-time inventory tracking, and advanced analytics dashboard.",
  //     image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Socket.io"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: true,
  //     stats: { views: "2.5K", stars: 45, forks: 12 }
  //   },
  //   {
  //     id: 2,
  //     title: "AI-Powered Task Manager",
  //     description: "Intelligent project management tool with AI-driven task prioritization, real-time collaboration, drag-and-drop functionality, and predictive analytics for team productivity optimization.",
  //     image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Framer Motion", "Prisma"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: true,
  //     stats: { views: "3.2K", stars: 67, forks: 23 }
  //   },
  //   {
  //     id: 3,
  //     title: "Real-time Analytics Dashboard",
  //     description: "Comprehensive data visualization platform with machine learning insights, interactive charts, real-time data streaming, and customizable KPI tracking for business intelligence.",
  //     image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["Vue.js", "Python", "TensorFlow", "D3.js", "AWS", "Redis"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: true,
  //     stats: { views: "1.8K", stars: 34, forks: 8 }
  //   },
  //   {
  //     id: 4,
  //     title: "Social Media Platform",
  //     description: "Modern social networking application with real-time messaging, media sharing, advanced privacy controls, and AI-powered content moderation for safe community building.",
  //     image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["React Native", "Firebase", "Node.js", "GraphQL", "WebRTC"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: false,
  //     stats: { views: "4.1K", stars: 89, forks: 34 }
  //   },
  //   {
  //     id: 5,
  //     title: "Crypto Trading Bot",
  //     description: "Automated cryptocurrency trading system with advanced algorithms, risk management, real-time market analysis, and portfolio optimization using machine learning models.",
  //     image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["Python", "FastAPI", "Redis", "WebSocket", "Docker", "TensorFlow"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: false,
  //     stats: { views: "2.9K", stars: 56, forks: 19 }
  //   },
  //   {
  //     id: 6,
  //     title: "Healthcare Management System",
  //     description: "Comprehensive healthcare platform with patient management, appointment scheduling, telemedicine integration, and HIPAA-compliant data handling for medical practices.",
  //     image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  //     tech: ["React", "Express", "PostgreSQL", "JWT", "Stripe", "WebRTC"],
  //     github: "https://github.com",
  //     live: "https://example.com",
  //     featured: false,
  //     stats: { views: "1.5K", stars: 28, forks: 7 }
  //   }
  // ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full blur-3xl"
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
            <Code2 className="w-4 h-4" />
            Featured Work
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-teal-400 via-green-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions and cutting-edge technologies. Each project represents a unique challenge 
            solved with creativity, technical expertise, and attention to detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
              loop={true}

            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-teal-400 !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-400 !opacity-100'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projects-swiper pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden h-full hover:border-teal-400/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -10,
                    boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)"
                  }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-teal-400 to-green-400 text-slate-900 text-sm font-bold rounded-full flex items-center gap-1"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                      >
                        <Star className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}

                    {/* Project Stats */}
                    {/* <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300 flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </motion.div>
                      <motion.div
                        className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300 flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </motion.div>
                    </div> */}

                    {/* Hover Overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full text-white hover:text-teal-400 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full text-white hover:text-teal-400 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div> */}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-teal-400/50 hover:text-teal-400 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(20, 184, 166, 0.1)"
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                      {project.OnProgress === "Onprogress" && (
  <motion.span
    className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-300/30 animate-pulse"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    🚧 In Progress
  </motion.span>
)}

                      </div>

                      <motion.div
                        className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              className="swiper-button-prev-custom w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 hover:bg-teal-400/20 hover:border-teal-400/50 transition-all duration-300 flex items-center justify-center text-teal-400"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </motion.button>
            <motion.button
              className="swiper-button-next-custom w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 hover:bg-teal-400/20 hover:border-teal-400/50 transition-all duration-300 flex items-center justify-center text-teal-400"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* View All Projects Button */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
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
            <span className="relative flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div> */}
      </div>

      <style>
        {`
        .projects-swiper .swiper-pagination {
          bottom: 0;
        }
        
        .projects-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;