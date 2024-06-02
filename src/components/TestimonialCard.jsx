  /* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
  

  const TestimonialCard = ({ rating, heading, description, name, position }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="flex flex-col gap-2 px-2 py-2 bg-white rounded-md border w-auto border-gray-200 shadow-md"
        >
          <div className="flex items-start justify-start mb-2">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="text-primary" />
            ))}
          </div>
          <p className="text-sm font-bold mb-2">{heading}</p>
          <p className="text-gray-600 font-xs">{description}</p>
          <p className="text-gray-600 text-sm flex flex-col">
            <span className="font-bold">{name}</span>
            <span>{position}</span>
          </p>
        </motion.div>
      </AnimatePresence>
    );
  };

  export default TestimonialCard;
