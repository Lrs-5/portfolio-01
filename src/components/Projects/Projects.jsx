import React from "react";
import ProjectCard from "./ProjectCard";
import Trash2CashImg from "../../assets/1769624257632.jpeg";
import TaskOrganiserImg from "../../assets/Screenshot 2026-03-25 233049.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="Projects" className="px-6 md:px-20 py-16 md:py-24 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="flex flex-wrap gap-8 justify-center lg:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <ProjectCard
          image={Trash2CashImg}
          title="Trash2Cash"
          main="A hackathon-based web platform designed to encourage sustainable waste management through rewards, dashboards, points tracking, and leaderboards. Built with React.js and integrated with MongoDB."
          demoLink="#"
          sourceLink="https://github.com/Lrs-5/Trash2Cash.git"
        />

        <ProjectCard
          image={TaskOrganiserImg}
          title="Task Organiser"
          main="A responsive React-based task management app that allows users to add, edit, delete, search, and filter daily tasks with a clean, mobile-friendly interface."
          demoLink="https://taskorganiser-01.netlify.app/"
          sourceLink="#"
        />
      </motion.div>
    </section>
  );
};

export default Projects;