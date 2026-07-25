import { motion } from "framer-motion";
import GlassCard from "./Glasscard";
function CertificateCard({ certificate }) {

return(
 <GlassCard className="p-8">
 <motion.div

 whileHover={{
    y: -8,
    scale: 1.02,
  }}
  transition={{
    duration: 0.25,
  }}

className="overflow-hidden rounded-2xl"

>

<img

src={certificate.image}

alt={certificate.title}

/>

<h3 className="mt-4 text-center">

{certificate.title}

</h3>

</motion.div>

</GlassCard>

)

}

export default CertificateCard;