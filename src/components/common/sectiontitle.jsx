import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;