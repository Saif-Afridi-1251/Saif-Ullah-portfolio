import { motion } from "framer-motion";

function CertificateCard({ certificate }) {

return(

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

)

}

export default CertificateCard;