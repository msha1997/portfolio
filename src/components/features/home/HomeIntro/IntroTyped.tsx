import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";

const IntroTyped = () => {
    return (
        <motion.div
            className="intro-typed"
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate="visible"
        >
            <span className="intro-typed__text">Hi, I am</span>{" "}
            <ReactTyped
                loop
                typeSpeed={100}
                backSpeed={20}
                backDelay={2000}
                strings={["Mohammad Shafiei", "Frontend Developer"]}
                className="intro-typed__name"
            />
        </motion.div>
    );
};

export default IntroTyped;
