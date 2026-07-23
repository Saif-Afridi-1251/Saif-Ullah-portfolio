import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

import profile from "../../data/profile";
import useActiveSection from "../../hooks/useActiveSection";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const active = useActiveSection();

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800 dark:bg-slate-950/70 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          {profile.name}
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className={`cursor-pointer transition hover:text-blue-400 ${
                active === item.id ? "text-blue-400" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Button */}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Right Side Mobile Buttons */}

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-slate-800 transition"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-950 border-t border-slate-800"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className={`px-6 py-4 cursor-pointer transition ${
                  active === item.id
                    ? "text-blue-400 bg-slate-900"
                    : "text-white hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;