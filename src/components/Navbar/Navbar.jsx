import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[#0b1120]/70 border-b border-white/5 px-6 md:px-20 py-5 flex justify-between items-center"
    >
      <a
        href="#Home"
        className="text-2xl font-bold tracking-wide text-white hover:text-[#7c8ee6] transition"
      >
        Lipsa<span className="text-[#7c8ee6]">.</span>
      </a>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-20 right-6 flex-col bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 gap-5 text-center md:static md:flex md:flex-row md:bg-transparent md:border-none md:p-0 md:gap-8`}
      >
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} onClick={() => setMenuOpen(false)}>
            <li className="hover:text-[#7c8ee6] transition duration-300 relative group">
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#7c8ee6] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </a>
        ))}
      </ul>

      <div className="md:hidden text-white cursor-pointer">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;