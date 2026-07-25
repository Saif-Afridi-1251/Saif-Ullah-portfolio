import { motion } from "framer-motion";
import GlassCard from "./Glasscard";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <GlassCard className="h-full">
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            p-4
            sm:p-6
            lg:p-8
            min-h-[180px]
          "
        >
          <Icon
            className="
              text-blue-400
              w-10
              h-10
              sm:w-12
              sm:h-12
              lg:w-14
              lg:h-14
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <h3
            className="
              mt-4
              text-base
              sm:text-lg
              lg:text-xl
              font-semibold
              text-white
              break-words
            "
          >
            {skill.name}
          </h3>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default SkillCard;