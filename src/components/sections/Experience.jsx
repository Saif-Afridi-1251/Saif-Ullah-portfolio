import React from 'react'
import SectionTitle from "../common/sectiontitle";
import ExperienceCard from "../common/ExperienceCard";
import experience from "../../data/experience.js";

function Experience(){

return(

<section
id="experience"
className="max-w-5xl mx-auto py-32 px-6"
>

<SectionTitle

title="Experience"

subtitle="Career"

/>

{

experience.map(job=>(

<ExperienceCard

key={job.company}

item={job}

/>

))

}

</section>

)

}

export default Experience;
