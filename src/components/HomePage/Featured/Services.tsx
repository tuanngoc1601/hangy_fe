import clsx from "clsx";
import useWindowSize from "../../../hooks/useWindowSize";
import { services } from "../../../lib/constants";
import { motion } from "framer-motion";

const Services = () => {
  const { width } = useWindowSize();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div
      className={clsx(
        "flex items-center justify-center text-black space-x-3 space-y-3 my-16",
        width >= 830 && "flex-row",
        width < 830 && "flex-col"
      )}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="p-4 flex flex-col items-center space-y-1 text-[#0A96E7]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }} // Removed once: true to re-trigger on each scroll
          variants={cardVariants}
        >
          <img
            src={service.img}
            alt={`service${index + 1}Img`}
            height={60}
            width={60}
          />
          <p className="text-sm font-semibold">{service.title}</p>
          <p className="font-light text-sm">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
