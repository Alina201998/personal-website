import Nav from "../components/Nav";
import Image from "next/image";
import ContactForm from "../components/ContactForm";


export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex flex-col flex-1 bg-background">
        <section className="relative px-6 py-28 border-b border-border overflow-hidden">
          <div className="grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider text-purple">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                Available for work
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight mb-5">
                {"I'm Alina, a "}
                <span className="bg-gradient-to-r from-purple via-pink to-amber bg-clip-text text-transparent">
                  software developer
                </span>
              </h1>

              <div className="font-mono text-sm text-text-secondary mb-7">
                building full-stack web apps
                <span className="inline-block w-2 h-4 bg-pink ml-1 align-middle animate-blink" />
              </div>

              <p className="text-text-secondary text-base sm:text-lg max-w-md mb-9">
                I build responsive, user-friendly web applications end to end, from React interfaces to the APIs and databases behind them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="rounded-full px-7 py-3 font-semibold text-sm text-white bg-gradient-to-r from-purple via-pink to-amber">
                  View my work
                </a>
                <a href="#contact" className="rounded-full px-7 py-3 font-semibold text-sm border border-border-strong text-foreground">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple via-pink to-amber opacity-20 blur-3xl" />

              <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-br from-purple via-pink to-amber">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-2">
                  <Image
                    src="/avatar.png"
                    alt="Alina Kiptenko"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -top-2 -left-6 px-4 py-2 rounded-full bg-surface-1 border border-border font-mono text-xs text-text-secondary animate-float [animation-delay:0s]">
                React
              </div>
              <div className="absolute bottom-6 -right-8 px-4 py-2 rounded-full bg-surface-1 border border-border font-mono text-xs text-text-secondary animate-float [animation-delay:1.2s]">
                Next.js
              </div>
              <div className="absolute -bottom-4 left-2 px-4 py-2 rounded-full bg-surface-1 border border-border font-mono text-xs text-text-secondary animate-float [animation-delay:2.4s]">
                PostgreSQL
              </div>
              <div className="absolute top-1/3 -right-10 px-4 py-2 rounded-full bg-surface-1 border border-border font-mono text-xs text-text-secondary animate-float [animation-delay:0.6s]">
                TypeScript
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-surface-1 border border-border font-mono text-xs text-text-secondary animate-float [animation-delay:1.8s]">
                Tailwind
              </div>
            </div>

          </div>
        </section>


        <section id="skills" className="px-6 py-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-wider text-purple mb-3">
                01 · Skills
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">What I work with</h2>
              <p className="text-text-secondary text-sm">
                Full-stack toolkit, grouped by layer.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-surface-1 border-l-[3px] border-purple rounded-lg p-6">
                <div className="text-purple font-bold text-sm mb-2">Front-end</div>
                <div className="text-text-secondary text-sm">
                  React, TypeScript, Next.js, Tailwind CSS, responsive design
                </div>
              </div>

              <div className="bg-surface-1 border-l-[3px] border-pink rounded-lg p-6">
                <div className="text-pink font-bold text-sm mb-2">Back-end & databases</div>
                <div className="text-text-secondary text-sm">
                  Node.js, PostgreSQL, REST APIs, authentication
                </div>
              </div>

              <div className="bg-surface-1 border-l-[3px] border-amber rounded-lg p-6">
                <div className="text-amber font-bold text-sm mb-2">Tools & workflow</div>
                <div className="text-text-secondary text-sm">
                  Git, Vercel, CI/CD, VS Code, debugging
                </div>
              </div>
            </div>
          </div>
        </section>





        <section id="projects" className="px-6 py-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-wider text-purple mb-3">
                02 · Work
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Featured projects</h2>
              <p className="text-text-secondary text-sm">
                A few things I&apos;ve built recently.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-surface-1 border border-purple/50 rounded-xl overflow-hidden hover:border-purple hover:-translate-y-1 transition relative">
                <a href="https://github.com/Alina201998/polling-place-finder" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label="View Polling Place Finder on GitHub" />

                <div className="absolute top-3 left-3 z-10 font-mono text-xs font-bold text-white bg-black/50 backdrop-blur px-2 py-1 rounded pointer-events-none">
                  01
                </div>
                <div className="aspect-video bg-surface-2 overflow-hidden pointer-events-none">
                  <img
                    src="/choose_or_lose_demo.gif"
                    alt="Polling Place Finder demo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 pointer-events-none">
                  <div className="font-bold text-base mb-2">Polling Place Finder</div>
                  <p className="text-text-secondary text-sm mb-4">
                    Desktop app that helps users locate their assigned polling place. Migrated the database layer from on-prem SQL Server to Azure SQL, and added an automated pytest suite to catch query and edge-case errors before they reached users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Python</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Tkinter</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Azure SQL</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">pytest</span>
                  </div>
                  <div className="text-sm text-text-secondary"></div>
                </div>
              </div>

              <div className="bg-surface-1 border border-purple/50 rounded-xl overflow-hidden hover:border-purple hover:-translate-y-1 transition relative">
                <a href="https://github.com/Alina201998/linkedin-post-generator" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label="View LinkedIn Post Generator on GitHub" />

                <div className="absolute top-3 left-3 z-10 font-mono text-xs font-bold text-white bg-black/50 backdrop-blur px-2 py-1 rounded pointer-events-none">
                  02
                </div>
                <div className="aspect-video bg-surface-2 overflow-hidden pointer-events-none">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/linkdin_post_generator.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-5 pointer-events-none">
                  <div className="font-bold text-base mb-2">LinkedIn Post Generator</div>
                  <p className="text-text-secondary text-sm mb-4">
                    An AI pipeline that turns one input into 2–3 tailored LinkedIn post drafts, connecting a React frontend to a Node/Express backend via a REST API. Iterated on prompt structure after early output was too generic, then validated results with real users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">React</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Node.js</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Express</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">OpenAI API</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <a href="https://linkedin-post-generator-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative z-10 pointer-events-auto text-text-secondary hover:text-pink">
                      Live demo
                    </a>

                  </div>
                </div>
              </div>

              <div className="bg-surface-1 border border-purple/50 rounded-xl overflow-hidden hover:border-purple hover:-translate-y-1 transition relative">
                <a href="https://github.com/Alina201998/Mood-Tracker-AndroidApp" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label="View Mood Tracker on GitHub" />

                <div className="absolute top-3 left-3 z-10 font-mono text-xs font-bold text-white bg-black/50 backdrop-blur px-2 py-1 rounded pointer-events-none">
                  03
                </div>
                <div className="aspect-video bg-surface-2 overflow-hidden pointer-events-none">
                  <img
                    src="/mood_tracker_demo.gif"
                    alt="Mood Tracker demo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 pointer-events-none">
                  <div className="font-bold text-base mb-2">Mood Tracker</div>
                  <p className="text-text-secondary text-sm mb-4">
                    A full CRUD Android app for logging daily moods, built with core OOP principles in Java. Covered 7+ edge cases in testing, eliminating crashes across every scenario tested.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Java</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">Android Studio</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">SQLite</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-secondary">RecyclerView</span>
                  </div>
                  <div className="text-sm text-text-secondary"></div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="about" className="px-6 py-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-wider text-purple mb-3">
                03 · About
              </div>
              <h2 className="font-display text-3xl font-bold">About me</h2>
            </div>

            <div className="group grid md:grid-cols-[1fr_1.4fr] gap-10 items-center bg-surface-1 border border-border rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40 hover:border-border-strong hover:-translate-y-1 transition">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/avatarBG.jpg"
                  alt="Alina Kiptenko"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <div className="text-text-secondary text-sm sm:text-base space-y-5">
                  <div>
                    <div className="text-purple font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                      Frontend
                    </div>
                    <p>
                      I&apos;m a <span className="text-foreground font-semibold">Software Developer</span> passionate about building responsive, user-friendly applications across web and mobile. I work with React, JavaScript, HTML, and CSS to create clean interfaces and smooth user experiences, and I also build with Java and Android Studio (RecyclerView, XML/ConstraintLayout).
                    </p>
                  </div>

                  <div>
                    <div className="text-pink font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                      Backend
                    </div>
                    <p>
                      I work with Node.js and Express to build REST APIs, and I&apos;ve integrated the OpenAI API to add AI-driven features to full-stack applications. I also write backend logic in Python.
                    </p>
                  </div>

                  <div>
                    <div className="text-amber font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                      Data
                    </div>
                    <p>
                      I use SQL with SQLite, SQL Server, and Azure SQL, as well as MongoDB — writing JOIN queries and implementing CRUD features with strong input validation and error handling. I enjoy solving real problems, writing clean code, and continuously learning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-7">
                  <a href="/resume.pdf" className="rounded-full px-6 py-2.5 font-semibold text-sm text-white bg-gradient-to-r from-purple via-pink to-amber">
                    Download resume
                  </a>
                  <a href="#projects" className="rounded-full px-6 py-2.5 font-semibold text-sm border border-border-strong text-foreground">
                    See my work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main >

      <section id="contact" className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16">

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-purple mb-3">
              04 · Contact
            </div>
            <h2 className="font-display text-3xl font-bold mb-8">Let&apos;s talk</h2>

            <div className="flex items-center gap-3 mb-4 text-sm text-text-secondary">
              <div className="w-9 h-9 rounded-lg bg-surface-1 flex items-center justify-center">✉</div>
              alinakip20@gmail.com
            </div>
            <div className="flex items-center gap-3 mb-4 text-sm text-text-secondary">
              <div className="w-9 h-9 rounded-lg bg-surface-1 flex items-center justify-center">📍</div>
              Miami, FL
            </div>
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <div className="w-9 h-9 rounded-lg bg-surface-1 flex items-center justify-center">⚙</div>
              github.com/Alina201998
            </div>
          </div>




          <ContactForm />
          {/* <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-text-secondary mb-2">Your name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-secondary mb-2">Your email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-secondary mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-purple"
              />
            </div>
            <button
              type="submit"
              className="rounded-full px-7 py-3 font-semibold text-sm text-white bg-gradient-to-r from-purple via-pink to-amber"
            >
              Submit now
            </button>
          </form> */}

        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-text-muted border-t border-border">
        © 2026 Alina Kiptenko. All rights reserved.
      </footer>

    </>
  );
}