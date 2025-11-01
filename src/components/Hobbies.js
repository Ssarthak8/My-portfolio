import React from "react";
import { motion } from "framer-motion";

const Hobbies = () => {
  const hobbies = [
    { emoji: "🎶", name: "Playing Flute" },
    { emoji: "📚", name: "Reading Books" },
    { emoji: "💻", name: "Coding & Development" },
    { emoji: "⚽", name: "Playing Football" },
    { emoji: "✈️", name: "Traveling" },
  ];

  return (
    <section
      id="hobbies"
      className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎯 Hobbies
      </motion.h2>

      <motion.ul
        className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {hobbies.map((hobby, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 px-6 py-3 rounded-2xl shadow hover:shadow-lg transition-all cursor-default"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-2xl">{hobby.emoji}</span>
            {hobby.name}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Hobbies;
