import React from "react";
import Image from "next/image";

import ContactForm from "./_components/ContactForm";
import { contactInfo } from "@/data/contact";
import { CONTACT_US_SECTION } from "@/lib/constants";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

const Contact = () => {
    return (
        <section id={CONTACT_US_SECTION} className="contact-section">
            <div className="container">
                {/* Section Header */}
                <Heading
                    text={CONTACT_US_SECTION}
                    description="Let's Discuss Project"
                />

                <div className="contact__content">
                    {/* Contact Form */}
                    <div className="contact__form-wrapper">
                        <div className="contact__form">
                            <h6 className="contact__form-heading">
                                Send a Message
                            </h6>
                            <p className="contact__form-lead">
                                I&apos;m excited to hear about your ideas. Feel
                                free to reach out.
                            </p>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Contact Info & Illustration */}
                    <div className="contact__info-wrapper">
                        <ul className="contact__info-list">
                            <ul className="contact__info-list">
                                {contactInfo.map((cInfo) => (
                                    <li
                                        key={cInfo.id}
                                        className="contact__info-item"
                                    >
                                        <div className="contact__info-icon">
                                            {cInfo.icon}
                                        </div>
                                        <div className="contact__info-details">
                                            <h5 className="contact__info-label">
                                                {cInfo.label}
                                            </h5>
                                            {["Mail", "Phone"].includes(
                                                cInfo.label
                                            ) ? (
                                                <Link
                                                    href={cInfo.link}
                                                    className="contact__info-value"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {cInfo.value}
                                                </Link>
                                            ) : (
                                                <p className="contact__info-value">
                                                    {cInfo.value}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                        <div className="contact__image-container">
                            <Image
                                src="/assets/img/contact.png"
                                alt="contact"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="contact__image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
