export default function Nav() {
    return (
        <nav className="sticky top-0 z-10 backdrop-blur bg-background/80 border-b border-border">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center gap-2 font-mono font-semibold text-sm">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple via-pink to-amber flex items-center justify-center text-white text-xs">
                        {"</>"}
                    </div>
                    Alina Kiptenko
                </div>

                <div className="hidden sm:flex items-center gap-8 text-sm text-text-secondary">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <a href="/resume.pdf" className="rounded-full px-5 py-2 text-sm font-semibold border border-border-strong">
                    Resume
                </a>
            </div>
        </nav>
    );
}