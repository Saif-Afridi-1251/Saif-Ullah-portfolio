import React, { useRef } from "react";
import SectionTitle from "../common/sectiontitle";
import { sendEmail } from "../../utils/email";


function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(form.current);

      alert("✅ Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to send message.");
    }
  };

  return (
    
    <section
      id="contact"
      className="max-w-5xl mx-auto py-32 px-6"
    >
      <SectionTitle
        title="Let's Work Together"
        subtitle="Contact"
      />

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Message"
          required
          className="w-full p-4 rounded-xl bg-slate-900"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </section>

    
  );
}

export default Contact;