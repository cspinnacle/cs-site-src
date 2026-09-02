import type { Metadata } from "next";
import SubNav from "../components/SubNav";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Class Info — CS @ Pinnacle Academy",
  description:
    "Everything families need: schedule, curriculum, grading philosophy, classroom rules, SIS portal, and clubs.",
};

const CURRICULUM = [
  {
    tag: "Grade 6 · 2x/week",
    title: "Introduction to Computer Science",
    desc: 'CodeHS "Mix & Match Middle School" modules — Karel logic, the internet, JavaScript art, and a new AI-literacy module with Teachable Machine.',
  },
  {
    tag: "Grade 7 · 2x/week",
    title: "Python with Turtle Graphics",
    desc: 'CodeHS "Python Basics with Tracy the Turtle" 1 & 2 — programming fundamentals through visual, motivating graphics.',
  },
  {
    tag: "Grade 8 · 3x/week",
    title: "Python Programming",
    desc: 'CodeHS "Introduction to Python Programming" — data structures, OOP, and a capstone AI text-classification project.',
  },
  {
    tag: "Grade 9 · 3x/week",
    title: "AI Foundations",
    desc: "Code.org's \"Computer Science and AI Foundations,\" then a semester building an original AI-powered web app.",
  },
  {
    tag: "Grades 10–11 · 4x/week",
    title: "AP Computer Science A",
    desc: "College Board's 2025–26 revised course: Objects & Methods, Selection & Iteration, Class Creation, Data Collections.",
  },
];

const SCHEDULE = [
  ["6th", "Introduction to Computer Science", "2x per week"],
  ["7th", "Python with Turtle Graphics", "2x per week"],
  ["8th", "Python Programming", "3x per week"],
  ["9th", "AI Foundations", "3x per week"],
  ["10th–11th", "AP Computer Science A", "4x per week"],
];

const THREE_RS = [
  { c: "bg-ink text-white", t: "Respect", d: "For yourself, your classmates, your teacher, and all classroom technology and equipment." },
  { c: "bg-keyword text-white", t: "Responsibility", d: "Own your learning: complete work honestly, care for shared devices, and communicate when you need help." },
  { c: "bg-string text-ink", t: "Readiness", d: "Arrive on time, prepared to focus, and ready to problem-solve — coding rewards patience and persistence." },
];

function Row({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start py-4 first:pt-0 last:pb-0">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-keyword shrink-0" aria-hidden />
      <div>
        {title && <h4 className="text-ink font-semibold mb-0.5">{title}</h4>}
        <div className="text-sm text-text-soft">{children}</div>
      </div>
    </div>
  );
}

export default function ClassInfoPage() {
  return (
    <>
      <div className="bg-ink text-white pt-[152px] pb-11">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-mono text-sm text-comment mb-3.5">
            cs/pinnacle/<span className="text-string">class-info.md</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold">Class Info</h1>
          <p className="max-w-xl mt-3.5 text-[#B9C4DC]">
            The full syllabus, in one page: who&apos;s teaching, what&apos;s
            being taught, how we run the room, and how to reach us.
          </p>
        </div>
      </div>

      <SubNav />

      {/* TEACHER */}
      <section id="teacher" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center mb-10">
            <Reveal>
              <span className="font-mono text-xs text-keyword-dim">{"// meet-your-teacher"}</span>
              <h2 className="text-2xl font-semibold mt-2">Mr. Myradov</h2>
              <p className="text-text-soft mt-1">Computer Science, Grades 6–11 · Computer Lab</p>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <img
                src="https://cdn.undraw.co/illustration/teacher_n0ow.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
          <Reveal className="max-w-xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
            <Row title="Engineering background">M.Eng. in Computer Technology</Row>
            <Row title="Industry experience">Software engineering + ML/AI research</Row>
            <Row title="Teaching load">Six CS courses across Grades 6–11 this year</Row>
            <Row title="Contact">
              <a href="mailto:gmyradov@paedu.org" className="text-keyword-dim border-b border-keyword">
                gmyradov@paedu.org
              </a>
            </Row>
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-16 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-xl mb-10">
            <span className="font-mono text-xs text-keyword-dim">{"// this-years-curriculum"}</span>
            <h2 className="text-2xl font-semibold mt-2">What each grade is building</h2>
            <p className="text-text-soft mt-1">
              Unit names below match the CodeHS / Code.org / College Board
              platforms directly, so progress is easy to verify.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {CURRICULUM.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full bg-white p-6 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                  <span className="text-xs font-semibold uppercase tracking-wide text-keyword-dim inline-block mb-3.5">
                    {c.tag}
                  </span>
                  <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm text-text-soft">{c.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="h-full bg-ink p-6 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#8FE0DA] inline-block mb-3.5">
                  new this year
                </span>
                <h3 className="font-semibold text-white mb-2">AI, everywhere</h3>
                <p className="text-sm text-[#B9C4DC]">
                  Hands-on AI projects now run through Grades 6–9, aligning
                  with national priorities on AI education and emerging
                  technology.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <span className="font-mono text-xs text-keyword-dim">{"// how-often-we-meet"}</span>
            <h2 className="text-2xl font-semibold mt-2">Class schedule</h2>
          </Reveal>
          <Reveal className="shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  {["Grade", "Course", "Meetings / week"].map((h) => (
                    <th key={h} className="text-left font-mono text-xs uppercase tracking-wide bg-ink text-white px-5 py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 1 ? "bg-paper-2" : ""}>
                    <td className="px-5 py-4 text-sm">{row[0]}</td>
                    <td className="px-5 py-4 text-sm">{row[1]}</td>
                    <td className="px-5 py-4 text-sm font-mono text-keyword-dim">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="font-mono text-sm text-text-soft mt-4">
            Room assignments and bell times are confirmed in QuickSchools and
            Google Classroom.
          </p>
        </div>
      </section>

      {/* HOMEWORK */}
      <section id="homework" className="py-16 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <span className="font-mono text-xs text-keyword-dim">{"// homework-and-reading-logs"}</span>
            <h2 className="text-2xl font-semibold mt-2">Our approach to at-home work</h2>
          </Reveal>
          <Reveal className="max-w-2xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
            <Row>Class time is built around hands-on coding and project work — most learning happens during class.</Row>
            <Row>Homework is occasional: usually finishing an in-progress module or preparing materials for the next project.</Row>
            <Row>There&apos;s no formal reading log for Computer Science — any at-home work is posted in Google Classroom with a clear due date.</Row>
          </Reveal>
        </div>
      </section>

      {/* CLASSROOM MANAGEMENT */}
      <section id="classroom" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <span className="font-mono text-xs text-keyword-dim">{"// classroom-management"}</span>
            <h2 className="text-2xl font-semibold mt-2">The 3 R&apos;s</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {THREE_RS.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.08}>
                <div className="text-center bg-white p-9 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                  <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-5 font-serif text-3xl font-bold ${r.c}`}>
                    R
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{r.t}</h3>
                  <p className="text-sm text-text-soft">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAY CONNECTED */}
      <section id="connect" className="py-16 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center mb-10">
            <Reveal>
              <span className="font-mono text-xs text-keyword-dim">{"// staying-connected"}</span>
              <h2 className="text-2xl font-semibold mt-2">Website, newsletters &amp; Google Classroom</h2>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <img
                src="https://cdn.undraw.co/illustration/join_niai.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { tag: "this site", title: "Class Website", desc: "Syllabus, yearly plan, and resources — always at cspinnacle.github.io." },
              { tag: "email + classroom", title: "Newsletters", desc: "Periodic updates on units and projects, sent by email and posted in Google Classroom." },
              { tag: "daily hub", title: "Google Classroom", desc: "The primary hub for assignments and feedback. Class codes are shared the first week of school." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full bg-white p-6 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                  <span className="text-xs font-semibold uppercase tracking-wide text-keyword-dim inline-block mb-3.5">
                    {c.tag}
                  </span>
                  <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm text-text-soft">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIS */}
      <section id="sis" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center mb-10">
            <Reveal className="max-w-xl">
              <span className="font-mono text-xs text-keyword-dim">{"// sis-portal"}</span>
              <h2 className="text-2xl font-semibold mt-2">QuickSchools</h2>
              <p className="text-text-soft mt-1">
                Pinnacle Academy&apos;s Student Information System — one login
                for grades, attendance, and progress all year.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <img
                src="https://cdn.undraw.co/illustration/certificate_cqps.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
          <Reveal className="max-w-xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
            <Row>Real-time gradebook for every assignment and project</Row>
            <Row>Daily attendance and tardy records</Row>
            <Row>Direct messaging with your child&apos;s teachers</Row>
            <Row>Login credentials distributed by the school office</Row>
          </Reveal>
        </div>
      </section>

      {/* ATTENDANCE */}
      <section id="attendance" className="py-16 bg-paper-2">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <span className="font-mono text-xs text-keyword-dim">{"// tardiness-and-absences"}</span>
            <h2 className="text-2xl font-semibold mt-2">Attendance expectations</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="h-full bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                <h3 className="font-semibold text-ink mb-2">Tardiness</h3>
                <p className="text-sm text-text-soft">
                  Standard Pinnacle Academy policy applies: arriving after
                  the bell counts as tardy. Repeated tardies follow the
                  school&apos;s normal administrative process.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
                <h3 className="font-semibold text-ink mb-2">Absences</h3>
                <p className="text-sm text-text-soft">
                  Follows the school&apos;s standard attendance policy.
                  Missed classwork is posted in Google Classroom — check
                  there first, then message me for anything unclear.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACADEMIC SUPPORT */}
      <section id="support" className="py-16 bg-ink text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <span className="font-mono text-xs text-[#8FE0DA]">{"// extra-help"}</span>
            <h2 className="text-2xl font-semibold mt-2 text-white">
              Academic support &amp; homework help
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center gap-7 bg-[#1E2E4D] p-9 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
              <div>
                <div className="font-mono text-xs uppercase text-comment tracking-wide">every week</div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-string mt-1">Mon &middot; 3:15&ndash;3:55 PM</div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1.5">
                  Computer Lab &middot; Sign-up required
                </h3>
                <p className="text-[#B9C4DC] text-sm max-w-md">
                  Open to every student, Grades 6&ndash;11. Reserve a spot
                  using the sign-up sheet in Google Classroom by Friday
                  afternoon so we can plan for space and one-on-one time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLUBS */}
      <section id="clubs" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center mb-10">
            <Reveal>
              <span className="font-mono text-xs text-keyword-dim">{"// beyond-the-classroom"}</span>
              <h2 className="text-2xl font-semibold mt-2">Clubs I&apos;m offering: Drone Club</h2>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <img
                src="https://cdn.undraw.co/illustration/approve_4ahx.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
          <Reveal className="max-w-2xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(22,35,61,0.10)]">
            <Row title="Open to">Interested students across Grades 6–11</Row>
            <Row title="Requirements">Approval from Mr. Myradov is required before joining — see me in class or email to confirm a spot</Row>
            <Row title="What we'll do">Flight fundamentals, drone programming, and hands-on build/repair challenges</Row>
            <Row title="When & where">
              <span className="font-mono text-xs text-rose bg-rose/10 px-2.5 py-1 inline-block">
                Day/time to be confirmed — details posted in Google Classroom
              </span>
            </Row>
            <Row title="Why join">A hands-on extension of this year&apos;s engineering &amp; emerging-tech focus</Row>
          </Reveal>
        </div>
      </section>
    </>
  );
}
