import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function TableOfContents() {
    const [activeSection, setActiveSection] = useState("hero");

    const sections = [
        { id: "hero", label: "Introduction" },
        { id: "code-example", label: "Code Examples" },
        { id: "features", label: "Why Zirco?" },
        { id: "get-started", label: "Get Started" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-64px 0px -50% 0px" }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 64;
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="hidden lg:block">
            <div className="sticky top-24">
                <h4 className="text-white mb-4 transition-colors duration-300">
                    On this page
                </h4>
                <nav className="space-y-2">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`flex items-center gap-2 w-full text-left py-2 px-3 border-l-2 transition-all duration-300 ${
                                activeSection === section.id
                                    ? "border-white text-white bg-gray-800"
                                    : "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                            }`}
                        >
                            <ChevronRight
                                className={`w-4 h-4 transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "translate-x-1"
                                        : ""
                                }`}
                            />
                            <span className="text-sm">{section.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
