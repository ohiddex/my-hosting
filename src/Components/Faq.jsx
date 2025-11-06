import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X, Plus } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [faqs, setFaqs] = useState([
    {
      question: "What is web hosting?",
      answer:
        "Web hosting lets you publish your website online. Your files are stored on a hosting provider’s server, making your site accessible worldwide 24/7.",
      tags: ["hosting", "basics", "getting-started"],
    },
    {
      question: "How do I connect my domain to hosting?",
      answer:
        "Update your DNS nameservers to those provided by your host. After propagation (usually 12–24 hours), your domain will be live on your hosting account.",
      tags: ["domain", "dns", "setup"],
    },
    {
      question: "What’s the difference between shared and VPS hosting?",
      answer:
        "Shared hosting means multiple sites share resources on one server. VPS hosting provides isolated environments with dedicated resources and higher performance.",
      tags: ["plans", "vps", "resources"],
    },
    {
      question: "How can I speed up my website?",
      answer:
        "Use caching, compress images, enable a CDN, and choose servers near your audience. Many hosting plans include optimization tools built in.",
      tags: ["speed", "performance", "cdn"],
    },
    {
      question: "How can I secure my hosting account?",
      answer:
        "Use 2FA, strong passwords, update plugins, and install an SSL certificate. Most web hosts offer free Let’s Encrypt SSL for security.",
      tags: ["security", "ssl", "safety"],
    },
  ]);

  const handleAddTag = (index, newTag) => {
    if (!newTag.trim()) return;
    const updatedFaqs = [...faqs];
    updatedFaqs[index].tags.push(newTag.trim());
    setFaqs(updatedFaqs);
  };

  const handleRemoveTag = (faqIndex, tag) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[faqIndex].tags = updatedFaqs[faqIndex].tags.filter(
      (t) => t !== tag
    );
    setFaqs(updatedFaqs);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-3 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Quick answers about web hosting, domains, performance, and security.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search questions, keywords, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-blue-700 rounded-full py-3 pl-5 pr-12 text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <Search className="absolute right-4 top-3 text-blue-300 w-6 h-6" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`border rounded-xl p-6 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-900/70 border-blue-400 shadow-lg"
                  : "bg-blue-950/40 border-blue-800 hover:border-blue-500 hover:bg-blue-900/50"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-white">
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
                    className="mt-4 text-blue-100 leading-relaxed"
                  >
                    <p>{faq.answer}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                          <button
                            onClick={() => handleRemoveTag(index, tag)}
                            className="ml-2 text-blue-300 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                      <AddTagInput
                        onAdd={(newTag) => handleAddTag(index, newTag)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {filteredFaqs.length === 0 && (
            <p className="text-center text-blue-300 mt-10">
              No results found for your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// Tag input component
const AddTagInput = ({ onAdd }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center bg-blue-900/60 border border-blue-700 rounded-full px-3 py-1">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add tag"
        className="bg-transparent text-sm outline-none placeholder-blue-300 text-blue-100 w-20"
      />
      <button
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
        className="text-blue-300 hover:text-blue-100 transition"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Faq;
