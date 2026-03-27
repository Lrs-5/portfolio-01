import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, main, demoLink, sourceLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group p-4 md:p-6 flex flex-col w-full sm:w-[360px] bg-[#111827] border border-white/10 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(70,86,151,0.22)] transition-all duration-300"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
          src={image}
          alt={title}
        />
      </div>

      <h3 className="pt-5 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>

      <p className="text-sm md:text-base leading-relaxed py-3 text-gray-300">
        {main}
      </p>

      <div className="mt-auto pt-4 flex gap-3 flex-wrap">
        {demoLink !== "#" && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2.5 px-5 text-sm md:text-base font-semibold rounded-full bg-[#465697] hover:opacity-90 duration-300"
          >
            Demo
          </a>
        )}

        {sourceLink !== "#" && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2.5 px-5 text-sm md:text-base font-semibold rounded-full border border-white/10 bg-white/5 hover:bg-white/10 duration-300"
          >
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;