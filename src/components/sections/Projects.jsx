import React from 'react'

import SectionTitle from "../common/sectiontitle";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";

function Projects(){

return(

<section
id="projects"
className="max-w-7xl mx-auto px-6 py-32"
>

<SectionTitle

title="Featured Projects"

subtitle="Portfolio"

/>

<div className="grid lg:grid-cols-2 gap-10">

{

projects.map(project=>(

<ProjectCard

key={project.title}

project={project}

/>

))

}

</div>

</section>

)

}

export default Projects;