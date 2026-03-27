import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const aboutData = [
  {
    title: "Frontend Development",
    desc: "Passionate about building modern, responsive, and visually appealing web interfaces with a strong focus on user experience and clean design.",
  },
  {
    title: "React & Web Technologies",
    desc: "Skilled in React, JavaScript, HTML, and CSS to create dynamic, interactive, and reusable frontend applications.",
  },
  {
    title: "Continuous Learning",
    desc: "As a CSE student, I’m constantly exploring new technologies, strengthening my development skills, and building projects that help me grow.",
  },
];

const About = () => {
  return (
    <section id="About" className="px-6 md:px-20 py-16 md:py-24 text-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-14">
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="bg-[#111827] border border-white/10 rounded-[2rem] p-5 shadow-[0_0_30px_rgba(70,86,151,0.18)]">
            <img
              className="w-full max-w-sm object-contain"
              src={AboutImg}
              alt="About"
            />
          </div>
        </motion.div>

        <div className="w-full lg:w-2/3 grid gap-6">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 bg-[#111827] border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(70,86,151,0.2)] transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <IoArrowForward size={28} className="mt-1 text-[#7c8ee6]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;