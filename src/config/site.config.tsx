import { Metadata } from "next";
import logoIconImg from "../../public/globe.svg";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const siteConfig = {
    title: "Mohammad Shafiei - Front-End Developer Portfolio",
    description: `Welcome. I'm Mohammad Shafiei, a passionate Front-End Developer. I specialize in building responsive, user-friendly web interfaces using modern technologies. Explore my projects and skills to see how I can help bring your ideas to life.`,
    icon: logoIconImg,
};

export const metaObject = (
    title?: string,
    openGraph?: OpenGraph,
    description: string = siteConfig.description
): Metadata => {
    return {
        title: title ? `${title} - Mohammad Shafiei` : siteConfig.title,
        description,
        openGraph: openGraph ?? {
            title: title ? `${title} - Mohammad Shafiei` : title,
            description,
            url: "https://portfolio.com",
            siteName: "Mohammad Shafiei Portfolio",
            locale: "en_US",
            type: "website",
        },
    };
};
