import { motion } from "framer-motion";
import GlassCard from "./Glasscard";
function CertificateCard({ certificate }) {

return(
 <GlassCard className="p-8">
 <motion.div
 
whileHover={{
scale:1.04
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