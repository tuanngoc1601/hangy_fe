// import { Arrival1, Arrival2, Arrival3, Arrival4 } from "../../../assets";
import { motion } from "framer-motion";

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
          <img
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzx87gi010lpc6.webp"
            alt=""
            className="w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ amount: 0.5, once: true }}
          className="grid grid-rows-2 gap-8"
        >
          {/* <img src={Arrival2} alt="" className="w-full h-full object-cover" /> */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img
                src={
                  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzx87gi010v5c4.webp"
                }
                alt=""
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img
                src={
                  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzx87gi02f6516.webp"
                }
                alt=""
                className="w-full object-cover"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img
                src={
                  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzx87ghzzm19df.webp"
                }
                alt=""
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ amount: 0.5, once: true }}
            >
              <img
                src={
                  "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzx87ghzzmap3c.webp"
                }
                alt=""
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
