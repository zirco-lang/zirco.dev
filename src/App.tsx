import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CodeExample } from "./components/CodeExample";
import { Features } from "./components/Features";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "./components/Footer";
import { StabilityNotice } from "./components/StabilityNotice";

export default function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 scroll-smooth transition-colors duration-300">
            <Header />
            <Hero />
            <StabilityNotice />
            <CodeExample />
            <Features />
            <GetStarted />
            <Footer />
        </div>
    );
}
