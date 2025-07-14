export const fadeInUp = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
    },
});