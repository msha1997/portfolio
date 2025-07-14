"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { INTRO_SECTION } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { introEffects } from "@/lib/effects";
import Heading from "@/components/ui/Heading";
import IntroTyped from "./IntroTyped";

const HomeIntro: FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section id={INTRO_SECTION} className="home-intro">
            {introEffects.map((effect, index) => (
                <div
                    key={index}
                    className={`home-intro__effect home-intro__effect--${
                        index + 1
                    } ${effect.positionClass}`}
                >
                    <Image
                        src={effect.src}
                        width={effect.width}
                        height={effect.height}
                        alt={effect.alt}
                    />
                </div>
            ))}

            <div className="home-intro__container">
                <motion.div
                    className="home-intro__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="home-intro__text-section">
                        <Heading text={INTRO_SECTION} />

                        <IntroTyped />

                        <motion.p
                            className="home-intro__paragraph"
                            variants={fadeInUp(0.3)}
                            initial="hidden"
                            animate="visible"
                        >
                            I design and develop modern, stylish websites, web
                            services, and online stores for clients of all
                            sizes.
                        </motion.p>

                        <motion.div
                            className="home-intro__button-container"
                            variants={fadeInUp(0.6)}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link
                                href="#contact"
                                className="home-intro__button"
                            >
                                Let’s Talk
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="home-intro__image-section"
                        variants={fadeInUp(0.8)}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="home-intro__image-wrapper">
                            <Image
                                alt="Home intro image"
                                src="/assets/img/home-banner.png"
                                fill
                                sizes="(min-width: 808px) 50vw, 100vw"
                                className="home-intro__image"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeIntro;
