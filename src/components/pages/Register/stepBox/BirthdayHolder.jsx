import { stepAnimate } from "@/constant/stepperInputAnimation";
import { motion } from "framer-motion";
import DatePicker from "./DatePicker";
import TextInput from "./TextInput";

const BirthdayHolder = () => {
  return (
    <motion.div {...stepAnimate}>
      <TextInput name="email" label="Email" type="email" />

      <TextInput name="nationalcode" label="National code" type="text" />
    </motion.div>
  );
};

export default BirthdayHolder;
