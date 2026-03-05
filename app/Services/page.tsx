import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";
import { Services as ServicesSection } from "../sections/Services";

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <ServicesSection />
            </main>
            <Footer />
        </div>
    );
}