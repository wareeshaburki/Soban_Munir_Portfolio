import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_claicfn",
        "template_252d3ow",
        form.current,
        "YykUfCRQuKxXI1Ec9",
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again. ❌");
        },
      );
  };

  return (
    <section id="contact" className="scroll-mt-20 p-5">
      <h1 className="text-center font-bold text-5xl mt-12 mb-4">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto">
        <div className="w-full md:w-[40%] px-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-blue-400 text-2xl font-semibold mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’d love to connect with you! Whether you have a question or a
            project idea, feel free to reach out. I’m always open to new
            opportunities and collaborations.
          </p>
          <p className="text-gray-300">
            <b className="text-blue-400">Email: </b>
            <a
              href="mailto:sobanmunir.official@gmail.com"
              className="hover:underline"
            >
              sobanmunir.official@gmail.com
            </a>
          </p>
        </div>

        <div className="w-[90%] md:w-[40%] md:mt-0">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col mx-4 gap-4 p-4 "
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400 ml-1">Name</label>
              <input
                name="from_name"
                type="text"
                required
                className="rounded-xl p-3 bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400 ml-1">Email</label>
              <input
                name="from_email"
                type="email"
                required
                className="rounded-xl p-3 bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="rounded-xl p-3 bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
                placeholder="What are you looking to build?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-black font-semibold py-2 px-4 rounded-md hover:text-blue hover:bg-gray-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
