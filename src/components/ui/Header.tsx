"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "@/lib/constants";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("");

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    // Update active link on scroll
    useEffect(() => {
        if (typeof window === "undefined") return;
        setActiveHref(window.location.hash || "#intro");
        const handleScroll = () => {
            const pos = window.scrollY + window.innerHeight / 2;
            for (const item of menuItems) {
                const section = document.querySelector(item.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    const bottom = top + rect.height;
                    if (pos >= top && pos < bottom) {
                        setActiveHref(item.href);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderLinks = (mobile = false) =>
        menuItems.map((item) => (
            <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={`${
                    mobile ? "header__mobile-link" : "header__menu-link"
                } ${
                    activeHref === item.href
                        ? mobile
                            ? "header__mobile-link--active"
                            : "header__menu-link--active"
                        : ""
                }`}
            >
                {item.label}
            </Link>
        ));

    return (
        <header className="header">
            <div className="header__container">
                <Link href="#" aria-label="Home" className="header__logo">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Logo"
                        width={110}
                        height={110}
                    />
                </Link>
                <nav className="header__desktop-menu">{renderLinks()}</nav>
                <div className="header__cta">
                    <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className="header__button"
                    >
                        Contact Now
                    </Link>
                </div>
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    className="header__hamburger-btn"
                >
                    <div className="header__hamburger-icon">
                        <div
                            className={`header__line header__line--top ${
                                isOpen ? "header__line--top-active" : ""
                            }`}
                        ></div>
                        <div
                            className={`header__line header__line--middle ${
                                isOpen ? "header__line--middle-active" : ""
                            }`}
                        ></div>
                        <div
                            className={`header__line header__line--bottom ${
                                isOpen ? "header__line--bottom-active" : ""
                            }`}
                        ></div>
                    </div>
                </button>
            </div>
            <div
                className={`header__mobile-menu ${
                    isOpen
                        ? "header__mobile-menu--open"
                        : "header__mobile-menu--closed"
                }`}
            >
                <div className="header__mobile-menu-container">
                    {renderLinks(true)}
                    <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className="header__contact-btn"
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
