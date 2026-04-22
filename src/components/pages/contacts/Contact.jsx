import React, { useRef } from "react";
import Container from "../../common/Container";
import emailjs from "@emailjs/browser";
import { useHref } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_96mumjl", "template_vgohbrc", form.current, {
        publicKey: "PLa6z8-BNiAI35iV0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div className="py-20">
      <Container>
        <div className="max-w-[1100px] mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Contact Me
            </h1>
            <p className="text-gray-500 mt-2">
              Feel free to reach out for any project or collaboration
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Info */}
            <div className="space-y-6">
              <div className="bg-[#bdc3c7] text-gray-900 p-6 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p>cppothikkhan@gmail.com</p>
              </div>

              <div className="bg-[#bdc3c7] text-gray-900 p-6 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <p>+880 1909251425</p>
              </div>

              <div className="bg-[#bdc3c7] text-gray-900 p-6 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-2">Location</h2>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-[#bdc3c7] text-gray-900 outline-none"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-[#bdc3c7] text-gray-900 outline-none"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-[#bdc3c7] text-gray-900 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-orange-600 py-3 rounded-lg text-white font-semibold hover:bg-gray-700 duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
