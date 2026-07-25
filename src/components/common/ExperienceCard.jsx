import { motion } from "framer-motion";
import GlassCard from "./Glasscard";

function ExperienceCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <GlassCard className="h-full">
        <div
          className="
            border-l-4
            border-blue-500
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {/* Position */}
          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-white
              break-words
            "
          >
            {item.position}
          </h3>

          {/* Company */}
          <p
            className="
              mt-2
              text-base
              sm:text-lg
              font-medium
              text-blue-400
              break-words
            "
          >
            {item.company}
          </p>

          {/* Duration */}
          <p
            className="
              mt-1
              text-sm
              sm:text-base
              text-slate-500
            "
          >
            {item.duration}
          </p>

          {/* Description */}
          <p
            className="
              mt-4
              text-sm
              sm:text-base
              leading-7
              text-slate-400
            "
          >
            {item.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ExperienceCard;