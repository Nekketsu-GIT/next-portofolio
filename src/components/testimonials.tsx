"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    content: "José delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire project smooth and successful.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with José was a game-changer for our startup. He built a scalable platform that helped us grow from 0 to 10,000 users. Highly recommended!",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Digital Agency",
    content: "José's work on our client portal was outstanding. The user experience is intuitive, and the performance is excellent. Our clients love the new system!",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "E-commerce Solutions",
    content: "The e-commerce platform José built for us increased our conversion rate by 40%. His expertise in modern web technologies is impressive.",
    rating: 5,
    avatar: "👨‍💼"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Main Testimonial Card */}
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700"
        variants={itemVariants}
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Quote Icon */}
        <motion.div
          className="absolute top-6 left-6 text-yaleblue/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Quote size={48} />
        </motion.div>

        {/* Rating Stars */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <motion.blockquote
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          "{testimonials[currentIndex].content}"
        </motion.blockquote>

        {/* Author Info */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-yaleblue to-darkgoldenrod rounded-full flex items-center justify-center text-2xl">
            {testimonials[currentIndex].avatar}
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <motion.button
            onClick={prevTestimonial}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </motion.button>
        </div>
      </motion.div>

      {/* Dots Indicator */}
      <motion.div
        className="flex justify-center gap-2 mt-8"
        variants={itemVariants}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-yaleblue scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            whileHover={{ scale: index === currentIndex ? 1.25 : 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Auto-play indicator */}
      <motion.div
        className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400"
        variants={itemVariants}
      >
        <p>Testimonial {currentIndex + 1} of {testimonials.length}</p>
      </motion.div>
    </motion.div>
  );
}
