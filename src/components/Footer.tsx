"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Footer component designed to match the navbar's width and aesthetics.
 * Connected to the bottom edge, with rounded top corners.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Product: [
            { name: "AI Solutions", href: "#ai-solutions" },
            { name: "Benefits", href: "#benefits" },
            { name: "Process", href: "#process" },
            { name: "Pricing", href: "#pricing" },
        ],
        Company: [
            { name: "About Us", href: "#about" },
            { name: "Meet the Founders", href: "#founders" },
            { name: "Careers", href: "#careers" },
            { name: "Support", href: "#support" },
        ],
        Social: [
            { name: "Twitter", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "Instagram", href: "#" },
        ],
        Legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto z-10">
            <motion.footer
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border-x border-t border-sand rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
            >
                <div className="px-8 pt-12 pb-8">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-10">
                        {/* Brand Column */}
                        <div className="col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-6 group">
                                <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                                    <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45" />
                                </div>
                                <span className="font-display text-2xl font-bold tracking-tight text-charcoal">
                                    Autonymo
                                </span>
                            </Link>
                        </div>

                        {/* Links Columns */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="col-span-1">
                                <h5 className="font-display font-bold text-charcoal text-xs uppercase tracking-widest mb-4">
                                    {title}
                                </h5>
                                <ul className="space-y-2.5">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-text-muted hover:text-charcoal transition-colors text-sm font-medium flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:text-accent-blue" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-sand/50 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-text-muted text-xs font-medium">
                            © {currentYear} Autonymo Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default Footer;
