import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";

function ProjectCard({ project }) {

return(

<motion.div

whileHover={{ y:-10 }}

className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg"

>

<img

src={project.image}

alt={project.title}

className="w-full h-56 object-cover"

/>

<div className="p-8">

<h3 className="text-2xl font-bold">

{project.title}

</h3>

<p className="mt-4 text-slate-400">

{project.description}

</p>

<div className="flex flex-wrap gap-2 mt-5">

{

project.tech.map(item=>(

<Badge

key={item}

text={item}

/>

))

}

</div>

<div className="flex gap-4 mt-8">

<Button
href={project.github}
>

GitHub

</Button>

{

project.demo &&

<Button

href={project.demo}

variant="secondary"

>

Live Demo

</Button>

}

</div>

</div>

</motion.div>

)

}

export default ProjectCard;