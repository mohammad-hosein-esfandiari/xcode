import { stepAnimate } from "@/constant/stepperInputAnimation";
import TextInput from "./TextInput";
import { motion } from "framer-motion";
import DatePicker from "./DatePicker";
const AuthHolder = () => {
  return (
    <motion.div {...stepAnimate}>
      <TextInput name="name" label="Name" type="text" />
      <TextInput name="lastname" label="Last name" type="text" />
      <DatePicker name="date" label="Birthday" type="text" />
    </motion.div>
  );
};

export default AuthHolder;
