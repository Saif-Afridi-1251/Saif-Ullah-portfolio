function StatCard({ number, label }) {

return(

<div className="bg-slate-900 rounded-2xl p-6 text-center">

<h3 className="text-4xl font-bold text-blue-400">

{number}+

</h3>

<p className="mt-3 text-slate-400">

{label}

</p>

</div>

)

}

export default StatCard;