import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";
import { Contact } from "../sections/Contact";

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}