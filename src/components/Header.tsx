import { ThemeSwitcher } from "./ThemeSwitcher";
import logoLight from "../assets/zirco-icon-light.png";
import logoDark from "../assets/zirco-icon-dark.png";
import React from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu first
            setIsMenuOpen(false);

            // Wait for menu to close, then calculate and scroll
            setTimeout(() => {
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 64;

                const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }, 350); // Wait for the 300ms animation + small buffer
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={logoLight}
                            alt="Zirco Logo"
                            className="h-8 w-auto dark:hidden"
                        />
                        <img
                            src={logoDark}
                            alt="Zirco Logo"
                            className="h-8 w-auto hidden dark:block"
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:items-center md:gap-6">
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("code-example")}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Examples
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection("get-started")}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Get Started
                        </button>
                        <ThemeSwitcher />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <nav
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-gray-200 dark:border-gray-700 ${
                        isMenuOpen
                            ? "max-h-96 opacity-100 border-t py-4"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("code-example")}
                            className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                        >
                            Examples
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection("get-started")}
                            className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                        >
                            Get Started
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
