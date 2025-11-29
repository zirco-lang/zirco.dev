import { TableOfContents } from "./TableOfContents";
import { FadeIn } from "./FadeIn";
import zircoLogoLight from "../assets/zirco-logo-light.png";
import zircoLogoDark from "../assets/zirco-logo-dark.png";

export function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 64;

            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen pt-16 md:pt-20 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8 md:gap-12 w-full py-12 md:py-20">
                <FadeIn className="max-w-3xl">
                    <div className="mb-6 md:mb-8">
                        <img
                            src={zircoLogoLight}
                            alt="Zirco Programming Language"
                            className="h-16 md:h-20 w-auto dark:hidden"
                        />
                        <img
                            src={zircoLogoDark}
                            alt="Zirco Programming Language"
                            className="h-16 md:h-20 w-auto hidden dark:block"
                        />
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
                        Bare-metal power. Modern clarity.
                    </h1>

                    <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
                        <p>
                            Zirco is an experimental compiled C-like programming
                            language with a strong type system and modern
                            syntax. The language is designed to provide a clean,
                            expressive syntax while maintaining compatibility
                            and simplicity for systems-level programming tasks.
                        </p>

                        <p>
                            No hidden control flow. No hidden memory
                            allocations. No macros. Just clear, predictable
                            code.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
                        <button
                            onClick={() => scrollToSection("get-started")}
                            className="group px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-white hover:dark:bg-gray-900 hover:text-gray-900 hover:dark:text-white border-2 border-gray-900 dark:border-white transition-all duration-300 text-center font-medium"
                        >
                            Get Started
                        </button>
                        <a
                            href="https://docs.zirco.dev"
                            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white transition-all duration-300 text-center font-medium"
                        >
                            Read Documentation
                        </a>
                    </div>
                </FadeIn>

                {/* Hide TableOfContents on mobile and tablet, show on desktop */}
                <div className="hidden lg:block">
                    <TableOfContents />
                </div>
            </div>
        </section>
    );
}
