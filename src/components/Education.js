import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      year: "2023 - Present",
      institution: "Pimpri Chinchwad University",
      course: "B.Tech in Computer Science and Engineering",
      result: "Ongoing",
    },
    {
      year: "2021 - 2023",
      institution: "Dr. D. Y. Patil Jr. College",
      course: "HSC (Science)",
      result: "60%",
    },
    {
      year: "2009 - 2021",
      institution: "SPM English Medium School",
      course: "SSC",
      result: "72%",
    },
  ];

  return (
    <section id="education" className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎓 Education
      </motion.h2>

      <div className="overflow-x-auto">
        <motion.table
          className="min-w-[80%] mx-auto bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr className="text-gray-800 dark:text-gray-100 text-left">
              <th className="py-3 px-6">📅 Year</th>
              <th className="py-3 px-6">🏫 Institution</th>
              <th className="py-3 px-6">📘 Course</th>
              <th className="py-3 px-6">🎯 Result</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <motion.tr
                key={index}
                className="border-t border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{edu.year}</td>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{edu.institution}</td>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{edu.course}</td>
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{edu.result}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </section>
  );
};

export default Education;
