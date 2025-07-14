import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HomeContactUs from "@/components/features/home/HomeContactUs";
import HomeIntro from "@/components/features/home/HomeIntro/index";
import HomePortfolio from "@/components/features/home/HomePortfolio";
import HomeServices from "@/components/features/home/HomeServices";
import HomeSkills from "@/components/features/home/HomeSkills";
import { metaObject } from "@/config/site.config";

export const metadata = {
    ...metaObject("Home"),
};

export default function Home() {
    return (
        <>
            <Header />

            <main className="flex-1">
                <HomeIntro />
                <HomeServices />
                <HomeSkills />
                <HomePortfolio />
                <HomeContactUs />
            </main>

            <Footer />
        </>
    );
}
