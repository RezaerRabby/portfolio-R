// export default function Contact() {
//   return (
//     <section id="contact" className="py-24 bg-slate-950 text-white">
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-4xl font-bold mb-6">
//           Contact
//         </h2>

//         <p>Email: rezaerrabby@gmail.com</p>
//         <p>Phone: +880 1760 137770</p>
//         <p>Address: Dhaka, Bangladesh</p>
//       </div>
//     </section>
//   );
// }


export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-4 text-center">
          Let's Connect
        </h2>

        <p className="text-gray-400 mb-12 text-lg text-center">
          Have a project in mind or just want to connect? I'm always open to
          discussing new opportunities and
          <br /> collaborations . 
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

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">
                  rezaerrabby@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">
                  +8801760 137770
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/10 outline-none"
              />

              <button
                className="
                  text-center
                  w-full
                  font-semibold
                  text-white
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-6 py-3
                  rounded-xl
                  transition
                  
                "
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

