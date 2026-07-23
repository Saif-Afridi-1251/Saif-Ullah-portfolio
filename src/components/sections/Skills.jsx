import React from 'react'
import SectionTitle from "../common/sectiontitle";
import SkillCard from "../common/SkillCard";
import skills from "../../data/skills";

function Skills(){

return(

<section
id="skills"
className="max-w-7xl mx-auto py-32 px-6"
>

<SectionTitle
title="My Skills"
subtitle="Technologies"
/>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

{

skills.map(skill=>(

<SkillCard

key={skill.name}

skill={skill}

/>

))

}

</div>

</section>

)

}

export default Skills;
