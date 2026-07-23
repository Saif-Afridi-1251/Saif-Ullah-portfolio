import React from 'react'
import SectionTitle from "../common/sectiontitle";

function Contact() {

return (

<section

id="contact"

className="max-w-5xl mx-auto py-32 px-6"

>

<SectionTitle

title="Let's Work Together"

subtitle="Contact"

/>

<form className="space-y-6">

<input

type="text"

placeholder="Your Name"

className="w-full p-4 rounded-xl bg-slate-900"

/>

<input

type="email"

placeholder="Your Email"

className="w-full p-4 rounded-xl bg-slate-900"

/>

<textarea

rows="6"

placeholder="Message"

className="w-full p-4 rounded-xl bg-slate-900"

/>

<button

className="bg-blue-600 px-8 py-4 rounded-xl"

>

Send Message

</button>

</form>

</section>

)

}

export default Contact;
