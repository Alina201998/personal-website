"use client";

import { useState } from "react";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-20 backdrop-blur bg-background/80 border-b border-border">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
                <a href="#" className="flex items-center gap-2 font-mono font-semibold text-sm">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple via-pink to-amber flex items-center justify-center text-white text-xs">
                        {"</>"}
                    </div>
                    Alina Kiptenko
                </a>

                {/* Desktop links */}
                <div className="hidden sm:flex items-center gap-8 text-sm text-text-secondary">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="hover:text-foreground transition">
                            {l.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a href="/resume.pdf" className="hidden sm:inline-block rounded-full px-5 py-2 text-sm font-semibold border border-border-strong">
                        Resume
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="sm:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2 rounded-md text-foreground"
                    >
                        <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"}`} />
                        <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${open ? "-translate-y-[1px] -rotate-45" : "translate-y-[3px]"}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div id="mobile-menu" className="sm:hidden border-t border-border bg-background/95 backdrop-blur px-6 py-4 flex flex-col gap-1">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base text-text-secondary hover:text-foreground">
                            {l.label}
                        </a>
                    ))}
                    <a href="/resume.pdf" onClick={() => setOpen(false)} className="mt-3 rounded-full px-5 py-3 text-sm font-semibold text-center border border-border-strong">
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}