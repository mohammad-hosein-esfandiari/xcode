import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import TextInput from "./TextInput";
const PasswordHolder = () => {
    return (
        <motion.div
        {...stepAnimate}
        className="mt-[-30px]">
            <TextInput name="password" label="Password" type="password" />
        <TextInput
          name="confirmpassword"
          label="Password confirmation"
          type="password"
        />
        </motion.div>
    );
}

export default PasswordHolder;