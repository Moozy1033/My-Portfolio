"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import { Menu, X, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Hotel Management Dashboard',
        description: 'Full-stack admin dashboard with bookings, room management and analytics.',
        tags: ['Next.js', 'React', 'MongoDB', 'Tailwind'],
        image: '/projects/hotel.png',
        href: '#',
    },
    {
        id: 2,
        title: 'Music Streaming App',
        description: 'Responsive music player with search, playlists, and Deezer API integration.',
        tags: ['Next.js', 'Tailwind', 'API'],
        image: '/projects/music.png',
        href: '#',
    },
    {
        id: 3,
        title: 'Job Board Platform',
        description: 'Job listing, search and application flow built for frontend devs.',
        tags: ['React', 'GraphQL', 'Postgres'],
        image: '/projects/jobboard.png',
        href: '#',
    },
    {
        id: 4,
        title: 'AI Chat Interface',
        description: 'Clean, fast AI chat UI with streaming responses and file uploads.',
        tags: ['Next.js', 'Tailwind', 'AI'],
        image: '/projects/ai.png',
        href: '#',
    },
]

export default function PortfolioPage() {
    const [query, setQuery] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    const filtered = projects.filter(
        (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.tags.join(' ').toLowerCase().includes(query.toLowerCase())
    )

    // Success Toast
    const showSuccessToast = (message) => {
        toast.success(message);
    };

    // Error Toast
    const showErrorToast = (message) => {
        toast.error(message);
    };

    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) {
            showErrorToast("Fill in the empty field")
            console.log("not filled");
        }
        else {
            showSuccessToast("Successfully sent")
            setForm({ name: "", email: "", message: "" })
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black text-slate-900 dark:text-slate-100">
            <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">MA</div>
                    <div>
                        <h1 className="text-lg font-semibold">Muraina Ayodeji</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Frontend Developer</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#projects" className="text-sm hover:underline">Projects</Link>
                    <Link href="#about" className="text-sm hover:underline">About</Link>
                    <Link href="#contact" className="text-sm hover:underline">Contact</Link>
                    <a href="/resume.pdf" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm shadow">Resume</a>
                </nav>

                {/* Mobile Hamburger */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {menuOpen && (
                    <div className="absolute top-full right-6 mt-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex flex-col p-4 gap-3 z-50">
                        <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </header>

            <main className="max-w-6xl mx-auto px-6">
                <section className="grid md:grid-cols-2 gap-8 items-center py-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Modern, fast and delightful interfaces <span className="text-indigo-600">built to scale</span>.</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">I’m a senior frontend developer specializing in building accessible, high-performance web apps with a focus on strong UX and maintainable code. I love creating innovative projects and exploring modern web technologies.</p>

                        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:scale-[1.02] transition">View projects</a>
                            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50 transition">Get in touch</a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="mt-8 flex gap-5 items-center justify-center md:justify-start">
                            <Link href="https://github.com/Moozy1033">
                                <Image src="/images/github.svg" width={30} alt="close" height={30} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/muraina-malik-17354a355/">
                                <Image src="/images/linkedin.svg" width={30} alt="close" height={30} />
                            </Link>
                            <Link href="https://github.com/Moozy1033">
                                <Image src="/images/twitter.svg" width={28} alt="close" height={28} />
                            </Link>
                            {/* // <a href='https://github.com/Moozy1033'></a>
                            // <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><Github className="w-6 h-6" /></a>
                            // <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><Linkedin className="w-6 h-6" /></a>
                            // <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><Twitter className="w-6 h-6" /></a>
                            // <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><MessageCircle className="w-6 h-6" /></a> */}
                        </div>
                    </div>

                    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/hero-dev.png" alt="developer at work" fill className="object-cover" />
                    </div>
                </section>

                <section id="projects" className="py-8">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-semibold">My Projects</h3>
                        <div className="flex items-center gap-3">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects or tags..."
                                className="px-3 py-2 border rounded-lg text-sm w-48 bg-white/80"
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filtered.map((p) => (
                            <article key={p.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-4 shadow hover:shadow-lg transition">
                                <div className="relative w-full h-44 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
                                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold text-lg">{p.title}</h4>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{p.description}</p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">{t}</span>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <a href={p.href} className="text-sm font-medium text-indigo-600">View project →</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </motion.div>

                </section>

                <section id="about" className="py-12">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold">About Me</h3>
                            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">I&apos;m Muraina Ayodeji, a passionate frontend developer focused on creating visually appealing, user-friendly, and responsive applications using modern technologies like Next.js, React, and Tailwind CSS.</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
                                    <div className="font-semibold">Core Skills</div>
                                    <div className="mt-2 text-sm text-slate-500">Next.js, React, Tailwind CSS, JavaScript, TypeScript, API Integration</div>
                                </li>
                                <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
                                    <div className="font-semibold">What Inspires Me</div>
                                    <div className="mt-2 text-sm text-slate-500">Turning creative ideas into elegant, functional designs that make a difference for users and businesses.</div>
                                </li>
                                <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
                                    <div className="font-semibold">My Focus</div>
                                    <div className="mt-2 text-sm text-slate-500">Clean UI/UX, fast performance, and seamless user interactions for modern web experiences.</div>
                                </li>
                                <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
                                    <div className="font-semibold">Future Goals</div>
                                    <div className="mt-2 text-sm text-slate-500">Continuing to master frontend engineering and explore AI-driven UI experiences.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
                        <h3 className="text-xl font-semibold">Let&apos;s Connect</h3>
                        <p className="mt-2 text-sm text-slate-500">Have a project idea or need a frontend developer? Send a message and I’ll get back to you soon.</p>

                        <ToastContainer position='top-right' autoClose={3000} />
                        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submit}>
                            <input placeholder="Your name" name='name' value={form.name} onChange={handleChange} className="p-3 rounded-lg border" />
                            <input placeholder="Email" name='email' value={form.email} onChange={handleChange} className="p-3 rounded-lg border" />
                            <input placeholder="Company (optional)" className="p-3 rounded-lg border md:col-span-2" />
                            <textarea placeholder="Message" name='message' value={form.message} onChange={handleChange} className="p-3 rounded-lg border md:col-span-2 h-28"></textarea>
                            <button type='submit' className="md:col-span-2 px-4 py-3 bg-indigo-600 text-white rounded-lg">Send message</button>
                        </form>
                    </div>
                </section>

                <footer className="py-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Muraina Ayodeji
                </footer>
            </main>
        </div>
    )
}
