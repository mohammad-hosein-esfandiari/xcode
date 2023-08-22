import { stepAnimate } from "@/constant/stepperInputAnimation";
import TextInput from "./TextInput";
import { motion } from "framer-motion";
import DatePicker from "./DatePicker";
const AuthHolder = () => {
  return (
    <motion.div {...stepAnimate}>
      <TextInput name="name" label="نام" type="text" />
      <TextInput name="lastname" label="نام خانوادگی" type="text" />
      <DatePicker name="date" label="تاریخ تولد" type="text" />

    </motion.div>
  );
};

export default AuthHolder;
