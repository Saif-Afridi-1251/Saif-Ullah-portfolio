import React from 'react'
import SectionTitle from "../common/sectiontitle";
import CertificateCard from "../common/CertificateCard";
import certificates from "../../data/certificates";

function Certificates(){

return(

<section

id="certificates"

className="max-w-7xl mx-auto py-32 px-6"

>

<SectionTitle

title="Certificates"

subtitle="Achievements"

/>

<div className="grid md:grid-cols-3 gap-10">

{

certificates.map(item=>(

<CertificateCard

key={item.title}

certificate={item}

/>

))

}

</div>

</section>

)

}

export default Certificates;
