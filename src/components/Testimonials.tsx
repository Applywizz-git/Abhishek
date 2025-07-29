import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, threshold: 0.1 });


  const { ref, inView: isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Engineering Manager, Fiserv Inc.",
    company: "Fiserv Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "Abhishek's contributions to our payment microservices and Kafka-based event processing significantly improved transaction visibility and reduced fraud detection latency. A highly dependable developer.",
    rating: 5,
    project: "Real-Time Payment Microservices",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Solutions Architect, New York Life Insurance",
    company: "New York Life Insurance",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "He helped us modernize our claims and policy systems using Spring Boot and Azure Functions. His REST API designs and CI/CD automation made our deployments faster and secure.",
    rating: 5,
    project: "Claims & Policy Workflow System",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Tech Lead, ICICI Bank",
    company: "ICICI Bank",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "Abhishek re-architected our customer onboarding module into scalable microservices, cutting production downtime and enabling fast risk evaluation using Spring Boot and DynamoDB.",
    rating: 5,
    project: "Customer Service Platform",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "IoT Product Manager, Bosch",
    company: "Bosch Mobility Solutions",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "His microservices for vehicle telemetry and Cassandra-based event storage were technically solid and efficient. He ensured real-time diagnostics and high system reliability in our connected vehicle infrastructure.",
    rating: 5,
    project: "Telemetry Diagnostics System",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Professor, Pace University",
    company: "Pace University",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "Abhishek demonstrated exceptional backend skills in his academic projects. His CI/CD knowledge, RESTful API design, and modern cloud-native thinking were well beyond typical student expectations.",
    rating: 5,
    project: "Academic Cloud Projects",
  }
];


  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-slate-600'
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-400 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-400/10 border border-violet-400/30 rounded-full text-violet-400 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Client Testimonials
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Clients <span className="bg-gradient-to-r from-violet-400 via-magenta-400 to-teal-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what industry leaders and satisfied clients 
            have to say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-violet-400 !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-violet-400 !opacity-100'
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
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 h-full hover:border-violet-400/50 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-violet-400/20 group-hover:text-violet-400/40 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-violet-400/50"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-violet-400/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-violet-400 text-sm font-medium">{testimonial.role}</p>
                        <p className="text-slate-400 text-xs">{testimonial.company}</p>
                      </div>
                    </div>

                    <StarRating rating={testimonial.rating} />

                    <motion.p
                      className="text-slate-300 leading-relaxed mt-4 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonial.content}"
                    </motion.p>

                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-violet-400 text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Project: {testimonial.project}</span>
                    </motion.div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-magenta-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "50+", label: "Happy Clients", icon: "😊" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" },
            { number: "100%", label: "Project Success", icon: "🎯" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-violet-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;