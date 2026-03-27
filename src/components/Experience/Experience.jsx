import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava size={42} className="text-orange-400" /> },
  { name: "Python", icon: <FaPython size={42} className="text-blue-400" /> },
  {
    name: "C",
    icon: (
      <div className="text-white text-3xl font-bold w-[42px] h-[42px] flex items-center justify-center">
        C
      </div>
    ),
  },
  { name: "HTML", icon: <FaHtml5 size={42} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3 size={42} className="text-blue-500" /> },
  { name: "SQL", icon: <TbSql size={42} className="text-red-400" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={42} className="text-sky-400" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={42} className="text-purple-400" />,
  },
  { name: "React", icon: <FaReact size={42} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={42} className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={42} className="text-green-500" /> },
];

const Experience = () => {
  return (
    <section id="Experience" className="px-6 md:px-20 py-16 md:py-24 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Skills & Experience
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-14 justify-between">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:w-1/2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center bg-[#111827] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(70,86,151,0.35)] hover:border-[#465697]/40"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="transition-all duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-3 text-sm md:text-base text-gray-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(70,86,151,0.2)] transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                CB
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  MERN Stack Summer Intern
                </h2>
                <p className="text-gray-400 text-sm">CodeBeat • Summer Internship</p>
              </div>
            </div>

            <ul className="text-gray-300 leading-8 text-sm md:text-base">
              <li>• Worked on full-stack web development projects.</li>
              <li>• Built responsive user interfaces using React and Bootstrap.</li>
              <li>• Gained hands-on experience with Node.js and MongoDB.</li>
              <li>• Improved practical understanding of frontend and backend integration.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;