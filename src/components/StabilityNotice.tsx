import { FadeIn } from "./FadeIn";

export function StabilityNotice() {
    return (
        <section
            id="code-example"
            className="py-12 flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
            {/* Caution tape banner: visually prominent, accessible alert */}
            <FadeIn delay={0.1}>
                <div className="w-full flex justify-center pointer-events-none">
                    <div
                        role="alert"
                        aria-live="polite"
                        className="pointer-events-none"
                    >
                        <div
                            className="text-sm font-bold uppercase tracking-wide select-none"
                            style={{
                                background: "#FFD400",
                                color: "#000",
                                padding: "0.5rem 1.25rem",
                                transform: "skew(-12deg)",
                                boxShadow: "0 2px 0 rgba(0,0,0,0.12)",
                                borderRadius: "0.25rem",
                                border: "2px solid rgba(0,0,0,0.9)",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    transform: "skew(12deg)",
                                }}
                            >
                                CAUTION — Zirco is highly unstable, and the
                                compiler is not yet production ready. Use at
                                your own risk!
                            </span>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
