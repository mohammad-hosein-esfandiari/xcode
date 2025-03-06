import LinkCp from "@/components/common/LinkCp";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
const RegisterLink = () => {
    return (
        <motion.div {...stepAnimate} className="text-[14px] mb-4 mr-2">
        <span className="sm:text-white text-mode-color mr-2">
          Dont have an account ?
        </span>
        <LinkCp
          href="/auth/register"
          className=" sm:text-register text-primary underline hover:text-blue-500">
        Register
        </LinkCp>
      </motion.div>
    );
}

export default RegisterLink;