import React from 'react'

import profile from "../../data/profile";
// import typewriter 
import { Typewriter } from "react-simple-typewriter";
// importing icons
import {

FaGithub,

FaLinkedin,

FaEnvelope

} from "react-icons/fa";

// Adding Framer Motion
import { motion } from "framer-motion";



function Hero(){

return(

<section
id="home"
className="relative min-h-screen flex items-center overflow-hidden"
>

    {/* This creates a modern glowing background without using images. */}
            <div className="absolute inset-0 -z-10">

        <div className="absolute top-32 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"/>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-20"/>

        </div>
    {/* This creates a modern glowing background without using images. */}

<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

 className="max-w-7xl mx-auto px-6">

<h2 className="text-2xl text-blue-400">

Hello, I'm

</h2>

<h1 className="text-6xl font-bold mt-3">

{profile.name}

</h1>

<p className="text-2xl mt-6 text-blue-400">

<Typewriter

words={[

"MERN Stack Developer",

"DevOps Engineer",

"Cloud Enthusiast",

"React Developer"

]}

loop

cursor

cursorStyle="|"

typeSpeed={70}

deleteSpeed={40}

/>

</p>



<p className="text-slate-400 mt-8 max-w-xl leading-8">

{profile.description}

</p>
<div className="flex gap-6 mt-10">

<a

href={profile.github}

target="_blank"

rel="noreferrer"

>

<FaGithub size={28}/>

</a>

<a

href={profile.linkedin}

target="_blank"

rel="noreferrer"

>

<FaLinkedin size={28}/>

</a>

<a

href={`mailto:${profile.email}`}

>

<FaEnvelope size={28}/>

</a>



</div>
<a

href={profile.resume}

download

className="inline-block mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"

>

Download Resume

</a>

</motion.div>

</section>

)

}

export default Hero;
