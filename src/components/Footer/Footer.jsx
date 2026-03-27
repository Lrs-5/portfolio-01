import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      id="Footer"
      className="px-6 md:px-20 py-16 md:py-24 text-white"
    >
      <motion.div
        className="bg-[#111827] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 shadow-[0_0_30px_rgba(70,86,151,0.15)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-xl font-normal text-gray-300 mt-2">
            Feel free to reach out!
          </h3>
        </div>

        <ul className="text-sm md:text-lg space-y-4">
          <motion.li whileHover={{ x: 8 }} className="flex gap-3 items-center">
            <MdOutlineEmail size={22} className="text-[#7c8ee6]" />
            <a
              href="mailto:lipsarani.sahoo2005@gmail.com"
              className="hover:text-[#7c8ee6] transition"
            >
              lipsarani.sahoo2005@gmail.com
            </a>
          </motion.li>

          <motion.li whileHover={{ x: 8 }} className="flex gap-3 items-center">
            <CiLinkedin size={22} className="text-[#7c8ee6]" />
            <a
              href="https://www.linkedin.com/in/lipsarani-sahoo-79909033b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7c8ee6] transition"
            >
              LinkedIn
            </a>
          </motion.li>

          <motion.li whileHover={{ x: 8 }} className="flex gap-3 items-center">
            <FaGithub size={20} className="text-[#7c8ee6]" />
            <a
              href="https://github.com/Lrs-5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7c8ee6] transition"
            >
              GitHub
            </a>
          </motion.li>

          <motion.li whileHover={{ x: 8 }} className="flex gap-3 items-center">
            <FaXTwitter size={20} className="text-[#7c8ee6]" />
            <a
              href="https://twitter.com/LipsaSahoo05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7c8ee6] transition"
            >
              @LipsaSahoo05
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Footer;