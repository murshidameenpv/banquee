/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";


const BlogCard = ({ imageSrc, blogText, tags, title }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="bg-white p-4"
      >
        {/* Image */}
        <img
          src={imageSrc}
          alt="Blog Image"
          className="rounded-lg w-full h-52 object-cover" // Set width to 100%, height to 48px, and object-fit to cover
        />
        {/* blog title */}
        <h3 className="text-md font-sans font-semibold">{title}</h3>
        {/* Blog Text */}
        <span className="text-gray-800 mt-4 text-sm">{blogText}</span>
        {/* Blog Tags */}
        <div className="flex items-start justify-start gap-3 mt-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-sm px-2 py-1 text-xs"
            >
              <span className="text-gray-600">{tag}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default BlogCard;
