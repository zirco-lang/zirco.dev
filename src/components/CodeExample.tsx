import zirco from "./zirco.tmLanguage.json";
import { FadeIn } from "./FadeIn";
import ShikiHighlighter from "react-shiki";

export function CodeExample() {
    const code = `#include <stdio.zh>

// Clear integer types and function syntax
fn factorial(n: i32) -> i32 {
    if (n <= 1) return 1; // Simple, C-like control flow
    return n * factorial(n - 1); 
}

fn main() -> i32 {
    printf("Hello, Zirco!\\n");
    let result: i32 = factorial(5);
    // Utilize familiar libc functions seamlessly
    printf("5! = %d\\n", result);
    return 0;
}`;

    return (
        <section
            id="code-example"
            className="min-h-screen pt-16 md:pt-20 flex items-center bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <FadeIn delay={0.1}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
                            Simple and Explicit
                        </h2>
                        <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            <p>Every line of Zirco code is straightforward.</p>
                            <p>
                                Memory management is visible and deterministic —
                                allocations and deallocations are explicit, so
                                there are no GC pauses or hidden allocations.
                            </p>
                            <p>
                                Control flow is clear and predictable, with no
                                hidden jumps or exceptions.
                            </p>
                            <p>Just plain, readable code.</p>
                        </div>
                    </FadeIn>

                    {/* <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden w-full transition-colors duration-300"> */}
                    <div className="overflow-x-auto">
                        <pre className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm min-w-max">
                            <code className="font-mono text-gray-900 dark:text-gray-100 leading-relaxed block transition-colors duration-300">
                                <ShikiHighlighter
                                    language={zirco}
                                    theme="plastic"
                                >
                                    {code}
                                </ShikiHighlighter>
                            </code>
                        </pre>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
