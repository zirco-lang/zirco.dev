import { FadeIn } from "./FadeIn";

export function GetStarted() {
    return (
        <section
            id="get-started"
            className="min-h-screen pt-16 md:pt-20 flex items-center bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <FadeIn>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 transition-colors duration-300">
                        Get Started
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <FadeIn delay={0.1}>
                        <div className="h-full bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 inline-block mb-4 font-mono text-sm rounded transition-colors duration-300">
                                01
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                                Install Prerequisites
                            </h3>
                            <div className="bg-gray-900 dark:bg-gray-950 text-white p-3 sm:p-4 mb-4 font-mono text-xs sm:text-sm overflow-x-auto rounded transition-colors duration-300">
                                <div>
                                    sudo apt install llvm-20-dev libpolly-20-dev
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                Install LLVM 20 and libpolly development
                                libraries for your platform.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="h-full bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 inline-block mb-4 font-mono text-sm rounded transition-colors duration-300">
                                02
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                                Install the Zircon Toolchain Manager
                            </h3>
                            <div className="bg-gray-900 dark:bg-gray-950 text-white p-3 sm:p-4 mb-4 font-mono text-xs sm:text-sm overflow-x-auto rounded transition-colors duration-300">
                                <div>
                                    curl -sSf https://zirco.dev/zstrap.sh | bash
                                </div>
                                <div>zircon build main</div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                Follow the steps to install the Zircon Toolchain
                                Manager (zircon) and set up your environment,
                                then build a toolchain.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="h-full bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 inline-block mb-4 font-mono text-sm rounded transition-colors duration-300">
                                03
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                                Write Your First Program
                            </h3>
                            <div className="bg-gray-900 dark:bg-gray-950 text-white p-3 sm:p-4 mb-4 font-mono text-xs sm:text-sm overflow-x-auto rounded transition-colors duration-300">
                                <div>zrc --emit object hello.zr</div>
                                <div>clang -o hello hello.o -lc</div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                Compile and link your first Zirco program to
                                native code.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="mt-8 md:mt-12 bg-white dark:bg-gray-900 border-l-4 border-gray-900 dark:border-white p-4 sm:p-6 rounded-r-lg transition-colors duration-300">
                    <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        Need detailed instructions?
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        Check out our{" "}
                        <a
                            href="https://docs.zirco.dev/GETTING_STARTED"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-300"
                        >
                            complete getting started guide
                        </a>{" "}
                        for step-by-step installation instructions,
                        troubleshooting tips, and platform-specific setup.
                    </p>
                </div>
            </div>
        </section>
    );
}
