

"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-4 text-center">
          Let's Connect
        </h2>

        <p className="text-gray-400 mb-12 text-lg text-center">
          Have a project in mind or just want to connect? I'm always open to
          discussing new opportunities and
          <br />
          collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              I'm currently looking for internship opportunities and exciting
              projects where I can contribute my skills and continue growing as
              a Full Stack Developer.
            </p>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <FaEnvelope className="text-cyan-400 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    rezaerrabby@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-cyan-400 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <FaPhoneAlt className="text-cyan-400 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    +8801760 137770
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-cyan-500"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-cyan-500"
              />

              <button
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold text-black transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}