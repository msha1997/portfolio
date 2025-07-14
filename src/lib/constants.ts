import { capitalize } from "./strings";


// sections
export const INTRO_SECTION = 'intro';
export const SERVICES_SECTION = 'services';
export const SKILLS_SECTION = 'skills';
export const PORTFOLIO_SECTION = 'portfolio';
export const CONTACT_US_SECTION = 'contact';

const sections = [INTRO_SECTION, SERVICES_SECTION, SKILLS_SECTION, PORTFOLIO_SECTION, CONTACT_US_SECTION];


export const menuItems = sections.map((section) => ({
    label: capitalize(section),
    href: `#${section}`,
}));


// email
export const EMAIL_SERVICE_ID = "service_e8laec7";
export const EMAIL_TEMPLATE_ID = "template_myzsinn";
export const EMAIL_PUBLIC_KEY = "koQTiGePDuYlB9nc2";