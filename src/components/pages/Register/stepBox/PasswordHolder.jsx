import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import TextInput from "./TextInput";
const PasswordHolder = () => {
    return (
        <motion.div
        {...stepAnimate}
        className="mt-[-30px]">
            <TextInput name="password" label="رمز عبور" type="password" />
        <TextInput
          name="confirmpassword"
          label="تکرار رمز عبور"
          type="password"
        />
        </motion.div>
    );
}

export default PasswordHolder;