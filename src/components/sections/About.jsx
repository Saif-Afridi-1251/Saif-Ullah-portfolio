import React from 'react'
import profile from "../../data/profile";
import SectionTitle from "../common/sectiontitle";

import StatCard from "../common/StatCard";
import GlassCard from '../common/Glasscard';

function About() {

return(
<GlassCard className='p-8'>
<section
id="about"
className="max-w-7xl mx-auto px-6 py-32"
>

<SectionTitle
title="About Me"
subtitle="Who I Am"
/>

<div className="grid md:grid-cols-2 gap-16 items-center">

<div>

<img
src="/profile.jpg"
alt="Profile"
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<h3 className="text-3xl font-bold">

Software Engineer & DevOps Enthusiast

</h3>

<p className="text-slate-400 mt-8 leading-8">

{profile.description}

</p> 
<div className="grid grid-cols-2 gap-5 mt-10">

<StatCard
number={profile.projectsCompleted}
label="Projects"
/>

<StatCard
number={profile.yearsExperience}
label="Years"
/>

<StatCard
number={profile.certifications}
label="Certificates"
/>

<StatCard
number={profile.technologies}
label="Technologies"
/>

</div>

</div>

</div>

</section>

</GlassCard>

)

}

export default About;
