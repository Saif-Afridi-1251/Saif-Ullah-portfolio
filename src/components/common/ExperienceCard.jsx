import GlassCard from "./Glasscard";
function ExperienceCard({ item }) {

return(

<GlassCard className="p-8">
<div className="border-l-4 border-blue-500 pl-8 py-6">

<h3 className="text-2xl font-bold">

{item.position}

</h3>

<p className="text-blue-400">

{item.company}

</p>

<p className="text-slate-500">

{item.duration}

</p>

<p className="mt-4 text-slate-400">

{item.description}

</p>

</div>
</GlassCard>

)

}

export default ExperienceCard;