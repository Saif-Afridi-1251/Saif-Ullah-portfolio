import { motion } from "framer-motion";
import GlassCard from "./Glasscard";

function CertificateCard({ certificate }) {
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
        {/* Certificate Image */}
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={certificate.image}
            alt={certificate.title}
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

        {/* Certificate Content */}
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
          <h3
            className="
              text-lg
              sm:text-xl
              lg:text-2xl
              font-semibold
              text-center
              text-white
              break-words
              leading-snug
            "
          >
            {certificate.title}
          </h3>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default CertificateCard;