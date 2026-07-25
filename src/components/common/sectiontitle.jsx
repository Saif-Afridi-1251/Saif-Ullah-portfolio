import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14 lg:mb-16 px-4"
    >
      <p
        className="
          text-blue-400
          uppercase
          font-semibold
          text-xs
          sm:text-sm
          tracking-[3px]
          sm:tracking-[5px]
        "
      >
        {subtitle}
      </p>

      <h2
        className="
          mt-3
          max-w-3xl
          mx-auto
          font-bold
          leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          text-white
          break-words
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;