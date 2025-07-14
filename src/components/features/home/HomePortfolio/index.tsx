"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

import { portfolioData } from "@/data/portfolio";
import { PORTFOLIO_SECTION } from "@/lib/constants";
import Heading from "@/components/ui/Heading";

const HomePortfolio = () => {
    return (
        <section id={PORTFOLIO_SECTION} className="section__portfolio relative">
            <div className="container">
                {/* Portfolio Title */}
                <Heading
                    text={PORTFOLIO_SECTION}
                    description=" Latest Projects"
                />

                {/* Portfolio Grid */}
                <div className="portfolio__grid">
                    {portfolioData.map((item) => (
                        <motion.div
                            key={item.id}
                            className="portfolio__box shadow-effect"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {/* Image */}
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="portfolio__img">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        objectFit="cover"
                                        fill
                                        className="portfolio__img-img"
                                    />
                                </div>
                            </Link>

                            {/* Info */}
                            <div className="portfolio__info">
                                <div>
                                    <h3 className="portfolio__title">
                                        {item.title}
                                    </h3>
                                    <span className="portfolio__subtitle">
                                        {item.subtitle}
                                    </span>
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio__link"
                                >
                                    <FaCircleArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePortfolio;
