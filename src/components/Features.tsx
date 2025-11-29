import { Shield, Code, Cpu, Wrench } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Features() {
    const features = [
        {
            icon: Shield,
            title: "Strong Type System",
            description:
                "Zirco features an extremely strong runtime type system that catches errors early and provides robust guarantees about your program's behavior.",
        },
        {
            icon: Code,
            title: "Modern Syntax",
            description:
                "Combines the familiarity of C with Rust-inspired modern language design. Clean, expressive syntax that's both readable and powerful.",
        },
        {
            icon: Cpu,
            title: "Native Performance",
            description:
                "Compiles to native code via LLVM. Suitable for low-level systems programming tasks where performance and control matter most.",
        },
        {
            icon: Wrench,
            title: "Systems Programming Ready",
            description:
                "Designed for systems-level development with C-like semantics, providing the control you need for embedded, kernel, and performance-critical applications.",
        },
    ];

    return (
        <section
            id="features"
            className="min-h-screen pt-16 md:pt-20 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        >
            <div className="w-full">
                <FadeIn>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12">
                        Why Zirco?
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <FadeIn key={index} delay={0.1 * index}>
                                <div className="h-full border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 rounded-lg">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-10 h-10 bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 rounded transition-colors duration-300">
                                            <Icon className="w-5 h-5 text-white dark:text-gray-900 transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
