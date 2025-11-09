import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is web hosting?",
      answer:
        "Web hosting lets you publish your website online. Your files are stored on a hosting provider’s server, making your site accessible worldwide 24/7.",
    },
    {
      question: "How do I connect my domain to hosting?",
      answer:
        "Update your DNS nameservers to those provided by your host. After propagation (usually 12–24 hours), your domain will be live on your hosting account.",
    },
    {
      question: "What’s the difference between shared and VPS hosting?",
      answer:
        "Shared hosting means multiple sites share resources on one server. VPS hosting provides isolated environments with dedicated resources and higher performance.",
    },
    {
      question: "How can I speed up my website?",
      answer:
        "Use caching, compress images, enable a CDN, and choose servers near your audience. Many hosting plans include optimization tools built in.",
    },
    {
      question: "How can I secure my hosting account?",
      answer:
        "Use 2FA, strong passwords, update plugins, and install an SSL certificate. Most web hosts offer free Let’s Encrypt SSL for security.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white py-12 sm:py-16 lg:py-20 px-6">
      <div className="max-w-5xl mx-auto">
       
        <div className="text-center mb-10 sm:mb-12 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-base sm:text-lg">
            Quick answers about web hosting, domains, performance, and security.
          </p>
        </div>

     
        <div className="space-y-4 sm:space-y-5 lg:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`border rounded-xl p-5 sm:p-6 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-900/70 border-blue-400 shadow-lg"
                  : "bg-blue-950/40 border-blue-800 hover:border-blue-500 hover:bg-blue-900/50"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between cursor-pointer items-center text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-blue-300 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-blue-100 leading-relaxed text-sm sm:text-base"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
