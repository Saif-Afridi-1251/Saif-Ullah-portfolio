import React, { useState } from 'react'
import profile from "../../data/profile.js";
import { Link } from "react-scroll";
import useActiveSection from '../../hooks/useActiveSection.jsx';
import { motion } from 'framer-motion';

import { Menu, X } from "lucide-react";

function Navbar() { 

    const [open,setOpen]=useState(false)

    const active = useActiveSection();

  return (

    <motion.nav initial={{ y:-100}}  animate={{y:0}}  transition={{duration:0.7}}
 className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-400">
          {profile.name}
        </h1>

        <ul className="hidden md:flex gap-8">

        <Link 
            className={ active==="about" ? "text-blue-400" : "text-white" }
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            >
            About
        </Link>

        <Link
            className={ active==="skills" ? "text-blue-400" : "text-white" }
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            >
            Skills
        </Link>

        <Link
             className={ active==="projects" ? "text-blue-400" : "text-white" }
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            >
            Projects
        </Link>

         <Link
            className={ active==="contact" ? "text-blue-400" : "text-white" }
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            >
            Contact
        </Link>

     </ul>

      </div>

    </motion.nav>

  )

}

export default Navbar;
