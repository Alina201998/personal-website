"use client";

import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="block text-sm font-semibold text-text-secondary mb-2">Your name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-text-secondary mb-2">Your email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-text-secondary mb-2">Message</label>
                <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                    className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
                />
            </div>
            <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full px-7 py-3 font-semibold text-sm text-white bg-gradient-to-r from-purple via-pink to-amber disabled:opacity-50"
            >
                {status === "sending" ? "Sending..." : "Submit now"}
            </button>
            {status === "sent" && (
                <p className="text-sm text-purple">Thanks! I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
                <p className="text-sm text-pink">Something went wrong. Please try again or email me directly.</p>
            )}
        </form>
    );
}