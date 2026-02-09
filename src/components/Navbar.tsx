"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Globe, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const solutions = [
        {
            title: "DentalOS",
            intro: "The intelligent backbone for modern dental practices. Automate scheduling and diagnostics.",
            color: "bg-[#E8F0FE]",
            href: "#dental"
        },
        {
            title: "EstateOS",
            intro: "Next-generation real estate management. AI-driven valuation and lead nurturing.",
            color: "bg-[#F5F5F7]",
            href: "#estate"
        },
        {
            title: "CustomOS",
            intro: "Your business logic, powered by AI. Modular systems for any complex workflow.",
            color: "bg-[#F0F4F8]",
            href: "#custom"
        }
    ];

    const moreLinks = [
        { title: "About Us", href: "#about" },
        { title: "Meet the Founders", href: "#founders" },
        { title: "Careers", href: "#careers" },
        { title: "Press Kit", href: "#press" },
        { title: "Contact Support", href: "#support" }
    ];

    const closeAll = () => {
        setIsSolutionsOpen(false);
        setIsLangOpen(false);
        setIsMoreOpen(false);
    };

    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-50 px-3 py-2 bg-white/80 backdrop-blur-xl border-x border-b border-sand rounded-b-xl"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                        </div>
                        <span className="font-display text-xl font-bold tracking-tight text-charcoal">
                            Autonymo
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <div>
                            <button
                                onClick={() => {
                                    setIsSolutionsOpen(!isSolutionsOpen);
                                    setIsLangOpen(false);
                                    setIsMoreOpen(false);
                                }}
                                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
                            >
                                AI Solutions
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                        <Link href="#benefits" onClick={closeAll} className="text-sm font-medium text-text-muted hover:text-charcoal transition-colors">
                            Benefits
                        </Link>
                        <Link href="#process" onClick={closeAll} className="text-sm font-medium text-text-muted hover:text-charcoal transition-colors">
                            Process
                        </Link>
                        <div>
                            <button
                                onClick={() => {
                                    setIsMoreOpen(!isMoreOpen);
                                    setIsSolutionsOpen(false);
                                    setIsLangOpen(false);
                                }}
                                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-charcoal transition-colors focus:outline-none"
                            >
                                More
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsLangOpen(!isLangOpen);
                                    setIsSolutionsOpen(false);
                                    setIsMoreOpen(false);
                                }}
                                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-muted hover:text-charcoal hover:bg-off-white rounded-lg transition-all focus:outline-none"
                            >
                                <Globe className="w-4 h-4" />
                                EN
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                        <Link
                            href="#contact"
                            className="px-5 py-2 text-sm font-semibold text-white bg-charcoal rounded-lg hover:bg-opacity-90 transition-all active:scale-95"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* AI Solutions Mega Menu */}
            <AnimatePresence>
                {isSolutionsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[calc(100%+8px)] left-0 w-full z-40 grid grid-cols-3 gap-2"
                    >
                        {solutions.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={closeAll}
                                className="block group bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-6 relative flex flex-col h-full overflow-hidden hover:border-warm-gray transition-all duration-300"
                            >
                                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

                                <h4 className="font-display text-lg font-bold text-charcoal mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-text-muted text-xs leading-relaxed mb-6">
                                    {item.intro}
                                </p>

                                <div className={`mt-auto aspect-[16/9] rounded-xl ${item.color} border border-sand/50 overflow-hidden relative`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-1/2 h-[1px] bg-charcoal/5 rotate-45" />
                                        <div className="w-1/2 h-[1px] bg-charcoal/5 -rotate-45" />
                                    </div>
                                    <div className="absolute top-2 left-2 flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/10" />
                                    </div>
                                    <div className="absolute bottom-2 left-2 right-2 h-1/2 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50" />
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* More Mega Menu */}
            <AnimatePresence>
                {isMoreOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[calc(100%+8px)] left-0 w-full z-40 grid grid-cols-2 gap-2"
                    >
                        {/* Left Card: Company Links */}
                        <div className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-6 h-full">
                            <div className="flex flex-col gap-0.5 items-start">
                                {moreLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        onClick={closeAll}
                                        className="group flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-off-white transition-all duration-300 w-full max-w-[240px]"
                                    >
                                        <span className="text-sm font-medium text-text-muted group-hover:text-charcoal transition-colors duration-300">{link.title}</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-charcoal opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Cards: Newsletter & Blog */}
                        <div className="flex flex-col gap-2">
                            {/* Newsletter Card */}
                            <div className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-5 flex flex-col hover:border-warm-gray transition-colors group cursor-pointer overflow-hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-sm font-bold text-charcoal">Newsletter</h5>
                                    <ArrowUpRight className="w-4 h-4 text-warm-gray group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <p className="text-[11px] text-text-muted leading-relaxed mb-4">Get the latest AI insights and product updates.</p>

                                <div className="aspect-[3.5/1] rounded-lg bg-[#F5F5F7] border border-sand/50 overflow-hidden relative">
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/60 backdrop-blur-sm border-t border-white/40 shadow-sm" />
                                </div>
                            </div>

                            {/* Blog Card */}
                            <div className="bg-white/90 backdrop-blur-2xl border border-sand rounded-2xl shadow-lg p-5 flex flex-col hover:border-warm-gray transition-colors group cursor-pointer overflow-hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-sm font-bold text-charcoal">Deep Dive Blogs</h5>
                                    <ArrowUpRight className="w-4 h-4 text-warm-gray group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <p className="text-[11px] text-text-muted leading-relaxed mb-4">Deep dives into AI automation and strategies.</p>

                                <div className="aspect-[3.5/1] rounded-lg bg-[#E8F0FE] border border-sand/50 overflow-hidden relative">
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded border border-white shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Language Dropdown */}
            <AnimatePresence>
                {isLangOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[calc(100%+8px)] right-3 w-32 bg-white/90 backdrop-blur-2xl border border-sand rounded-xl shadow-lg p-1 z-50"
                    >
                        <div className="flex flex-col gap-0.5">
                            {['English', 'Spanish', 'German', 'Catalan'].map((lang, idx) => (
                                <button
                                    key={lang}
                                    onClick={closeAll}
                                    className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 group flex items-center justify-between hover:bg-off-white ${idx === 0 ? 'text-charcoal' : 'text-text-muted hover:text-charcoal'}`}
                                >
                                    {lang}
                                    <div className={`w-1 h-1 rounded-full bg-charcoal transition-opacity duration-300 ${idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
