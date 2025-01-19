import { motion } from "framer-motion";

const Contact = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className="text-center tracking-tighter"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.form
          action="https://formspree.io/f/xbllbzrq"
          method="POST"
          className="max-w-md mx-auto"
          variants={fadeInVariant}
        >
          <motion.div className="mb-4" variants={fadeInVariant}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-neutral-900 rounded-lg text-black placeholder-gray-500"
            />
          </motion.div>
          <motion.div className="mb-4" variants={fadeInVariant}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-neutral-900 rounded-lg"
            />
          </motion.div>
          <motion.div className="mb-4" variants={fadeInVariant}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border border-neutral-900 rounded-lg"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition"
            variants={fadeInVariant}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
