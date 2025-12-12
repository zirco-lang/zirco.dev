import logoDark from "../assets/zirco-logo-dark.png";

interface FooterLink {
    label: string;
    href: string;
}
interface FooterSection {
    title: string;
    links: FooterLink[];
}

const FOOTER_LINKS: Record<string, FooterSection> = {
    learn: {
        title: "Learn",
        links: [
            { label: "Documentation", href: "https://docs.zirco.dev" },
            { label: "Tutorial", href: "https://zirco.dev/GETTING_STARTED" },
            {
                label: "Examples",
                href: "https://github.com/zirco-lang/zrc/tree/main/examples",
            },
        ],
    },
    community: {
        title: "Community",
        links: [
            { label: "GitHub", href: "https://github.com/zirco-lang" },
            { label: "Discord", href: "https://discord.gg/NXfGWYgeBg" },
        ],
    },
    resources: {
        title: "Resources",
        links: [
            { label: "Internals", href: "https://zirco.dev/COMPILER_PIPELINE" },
            {
                label: "Contributing",
                href: "https://github.com/zirco-lang/zrc/pulls",
            },
            { label: "Full Spec", href: "https://zirco.dev/SPEC" },
        ],
    },
};

const FooterSection = ({ title, links }: FooterSection) => (
    <div>
        <h4 className="text-white mb-4 transition-colors duration-300">
            {title}
        </h4>
        <ul className="space-y-2 text-sm">
            {links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-700 bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src={logoDark}
                                alt="Zirco Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            A general-purpose programming language for robust,
                            optimal, and clear software.
                        </p>
                    </div>

                    {/* Dynamic Footer Sections */}
                    {Object.values(FOOTER_LINKS).map((section) => (
                        <FooterSection
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400 transition-colors duration-300">
                    <p>
                        © {currentYear} Zirco Contributors, Logan Devine and
                        dawn_ll. Website released under the MIT License.
                    </p>
                    <p>
                        Zirco is open source software released under the GNU
                        Lesser General Public License.
                    </p>
                </div>
            </div>
        </footer>
    );
}
