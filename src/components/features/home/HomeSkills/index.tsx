"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import { effectThree, effectFour } from "@/lib/effects";
import { experiencesData, skillsData } from "@/data/skills";
import { CONTACT_US_SECTION, SKILLS_SECTION } from "@/lib/constants";

const motionVariants = {
    fadeInUp: {
        initial: { opacity: 0, y: -10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    fadeInDown: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.7 },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.3 },
    },
};

const Skill = () => (
    <section className="skill-section" id={SKILLS_SECTION}>
        <div className="skill-section__container">
            <div className="skill-section__row">
                {/* Left Column */}
                <div className="skill-section__column skill-section__column--left">
                    {/* Heading */}
                    <motion.div
                        {...motionVariants.fadeInUp}
                        viewport={{ once: true }}
                    >
                        <Heading
                            text={SKILLS_SECTION}
                            description="Skills and Experience"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        {...motionVariants.fadeIn}
                        transition={{
                            ...motionVariants.fadeIn.transition,
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="skill-section__description"
                    >
                        I am a skilled web developer with expertise in HTML5,
                        CSS3, React.js, Node.js, and version control with Git. I
                        have extensive experience working as a frontend and
                        React specialist in reputable companies like HiWeb Inc.
                        and Snapp Group. My strong technical background and
                        proven track record make me a valuable asset for any
                        development team.
                    </motion.p>

                    {/* Skills Grid */}
                    <motion.div
                        {...motionVariants.fadeIn}
                        transition={{ duration: 0.6, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                        className="skill-section__skills-box"
                    >
                        <h3 className="skill-section__skills-title">
                            My Skills
                        </h3>
                        <div className="skill-section__skills-grid">
                            {skillsData.map(({ id, name, icon }) => (
                                <motion.div
                                    key={id}
                                    className="skill-section__skill-item shadow-effect"
                                    {...motionVariants.scaleIn}
                                >
                                    <div className="skill-section__icon">
                                        {icon}
                                    </div>
                                    <h6 className="skill-section__skill-name">
                                        {name}
                                    </h6>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="skill-section__column skill-section__column--right">
                    {/* Experience List */}
                    <motion.div
                        {...motionVariants.fadeInDown}
                        viewport={{ once: true }}
                        className="skill-section__experience-box"
                    >
                        <h3 className="skill-section__experience-title">
                            Experience
                        </h3>
                        <ul className="skill-section__experience-list">
                            {experiencesData.map(
                                ({ id, date, designation, company }) => (
                                    <li
                                        key={id}
                                        className="skill-section__experience-item"
                                    >
                                        <h6 className="skill-section__experience-date">
                                            {date}
                                        </h6>
                                        <div className="skill-section__experience-details">
                                            <h5 className="skill-section__designation">
                                                {designation}
                                            </h5>
                                            <span className="skill-section__company">
                                                {company}
                                            </span>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>

                    {/* Avatar & Effects */}
                    <div className="skill-section__user-section">
                        <motion.div
                            {...motionVariants.fadeIn}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="skill-section__effects"
                        >
                            <Image
                                src={effectThree.src}
                                alt={effectThree.alt}
                                width={effectThree.width}
                                height={effectThree.height}
                                className={`${effectThree.className} ${effectThree.positionClass}`}
                            />
                        </motion.div>
                        <motion.div
                            {...motionVariants.fadeIn}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="skill-section__effects"
                        >
                            <Image
                                src={effectFour.src}
                                alt={effectFour.alt}
                                width={effectFour.width}
                                height={effectFour.height}
                                className={`${effectFour.className} ${effectFour.positionClass}`}
                            />
                        </motion.div>
                        {/* Avatar Image */}
                        <motion.div
                            {...motionVariants.fadeIn}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="skill-section__avatar"
                        >
                            <Image
                                src="/assets/img/avatar.jpg"
                                alt="avatar"
                                layout="responsive"
                                width={1}
                                height={1}
                                objectFit="cover"
                            />
                        </motion.div>
                    </div>

                    {/* Hire Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        {...motionVariants.fadeIn}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <Link
                            className="skill-section__hire-btn"
                            href={`#${CONTACT_US_SECTION}`}
                        >
                            Hire me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

export default Skill;
