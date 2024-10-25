// import { Arrival1, Arrival2, Arrival3, Arrival4 } from "../../../assets";
import { motion } from "framer-motion";
import {
  Arrival1,
  Arrival2,
  Arrival3,
  Arrival4,
  Arrival5,
} from "../../../assets";

const Feature = () => {
  return (
    <div className="w-full md:mt-14 xs:mt-10 sm:mt-12 lg:mt-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
        className="flex items-center justify-start"
      >
        <div className="bg-primary h-8 w-3 rounded-sm mr-4"></div>
        <h2 className="md:text-4xl xs:text-2xl sm:text-3xl font-semibold">
          Hàng mới về
        </h2>
      </motion.div>
      <div className="grid mx:grid-cols-2 xs:grid-cols-1 md:gap-8 sm:gap-6 xs:gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ amount: 0.5, once: true }}
        >
          <img src={Arrival1} alt="" className="w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ amount: 0.5, once: true }}
          className="grid grid-rows-2 md:gap-8 sm:gap-6 xs:gap-4"
        >
          {/* <img src={Arrival2} alt="" className="w-full object-cover" /> */}
          <div className="grid grid-cols-2 md:gap-8 sm:gap-6 xs:gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img src={Arrival2} alt="" className="w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img src={Arrival3} alt="" className="w-full object-cover" />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:gap-8 sm:gap-6 xs:gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img src={Arrival4} alt="" className="w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img src={Arrival5} alt="" className="w-full object-cover" />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img src={Arrival5} alt="" className="w-full object-cover" />
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
