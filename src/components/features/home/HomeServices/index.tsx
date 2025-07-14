"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaSearchengin, FaMobileAlt } from "react-icons/fa";
import { SERVICES_SECTION } from "@/lib/constants";
import Heading from "@/components/ui/Heading";

const serviceData = [
    {
        id: 1,
        name: "Front-End Programming",
        icon: <FaLaptopCode />,
        desc: "Building responsive and interactive user interfaces with modern frameworks.",
    },
    {
        id: 2,
        name: "SEO Optimization",
        icon: <FaSearchengin />,
        desc: "Improve your website's visibility and ranking on search engines efficiently.",
    },
    {
        id: 3,
        name: "Mobile App UI Design",
        icon: <FaMobileAlt />,
        desc: "Designing sleek and user-friendly mobile interfaces for your applications.",
    },
];

const HomeServices = () => {
    return (
        <section id={SERVICES_SECTION} className="services-section">
            <div className="services__container">
                <Heading text="services" description="Services I Offer" />

                <div className="services__grid">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service__item shadow-effect"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="service__number">0{service.id}</div>
                            <div className="flex flex-col items-center text-center">
                                <div className="service__icon">
                                    {service.icon}
                                </div>
                                <h3 className="service__title">
                                    {service.name}
                                </h3>
                                <p className="service__desc">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
