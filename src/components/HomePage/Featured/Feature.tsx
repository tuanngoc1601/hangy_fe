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
    <div className="w-full mt-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
        className="flex items-center justify-start"
      >
        <div className="bg-primary h-8 w-3 rounded-sm mr-4"></div>
        <h2 className="text-4xl font-semibold">Hàng mới về</h2>
      </motion.div>
      <div className="grid grid-cols-2 gap-8 mt-8">
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
          className="grid grid-rows-2 gap-8"
        >
          {/* <img src={Arrival2} alt="" className="w-full object-cover" /> */}
          <div className="grid grid-cols-2 gap-8">
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
          <div className="grid grid-cols-2 gap-8">
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
