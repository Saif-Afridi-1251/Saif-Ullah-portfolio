import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";
import GlassCard from "./Glasscard";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <GlassCard className="group h-full overflow-hidden">
        {/* Project Image */}
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-48
              sm:h-56
              lg:h-64
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8">
          {/* Title */}
          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-white
              break-words
            "
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-400
              leading-relaxed
              min-h-[72px]
            "
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((item) => (
              <Badge key={item} text={item} />
            ))}
          </div>

          {/* Push Buttons to Bottom */}
          <div className="mt-auto pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={project.github}>
                GitHub
              </Button>

              {project.demo && (
                <Button
                  href={project.demo}
                  variant="secondary"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ProjectCard;