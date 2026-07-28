import React from 'react'

import SectionTitle from "../common/sectiontitle";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";
import useGithubRepos from "../../hooks/useGithubRepos";
function Projects(){

    const { repos, loading } = useGithubRepos();

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

{loading ? (
  <p className="text-center text-gray-400">
    Loading GitHub repositories...
  </p>
) : (
  repos.map((repo) => (
    <ProjectCard
      key={repo.id}
      project={{
        title: repo.name,
        description:
          repo.description || "No description available.",

        github: repo.html_url,

        demo: repo.homepage,

        tech: [],

        image:
          "https://placehold.co/600x400/png",
      }}
    />
  ))
)}

</div>

</section>

)

}

export default Projects;