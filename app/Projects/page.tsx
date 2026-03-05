import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";
import { Projects } from "../sections/Project";

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Projects />
            </main>
            <Footer />
        </div>
    );
}