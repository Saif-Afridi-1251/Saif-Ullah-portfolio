import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
        w-full
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-lg
        shadow-lg
        hover:shadow-blue-500/20
        hover:border-blue-500/30
        transition-all
        duration-300
        p-4
        sm:p-5
        md:p-6
        text-center
        min-h-[140px]
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <h3
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-blue-400
          leading-none
        "
      >
        {number}+
      </h3>

      <p
        className="
          mt-3
          text-sm
          sm:text-base
          text-slate-400
          leading-relaxed
        "
      >
        {label}
      </p>
    </motion.div>
  );
}

export default StatCard;