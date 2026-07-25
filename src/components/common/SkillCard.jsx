import GlassCard from "./Glasscard";
function SkillCard({ skill }) {

const Icon=skill.icon;

return(
 <GlassCard className="p-8">
<div className="bg-slate-900 hover:bg-slate-800 transition rounded-2xl p-8 flex flex-col items-center">

<Icon
size={45}
className="text-blue-400"
/>

<h3 className="mt-5">

{skill.name}

</h3>

</div>
</GlassCard>

)

}

export default SkillCard;