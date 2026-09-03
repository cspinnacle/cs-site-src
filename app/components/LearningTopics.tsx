import Link from "next/link";

interface Topic {
  title: string;
  desc: string;
  href?: string;
}

const TOPICS: Topic[] = [
  {
    title: "Variables & Data Types",
    desc: "Naming and storing information a program can use later.",
    href: "/articles/understanding-variables",
  },
  {
    title: "Binary & How Computers Think",
    desc: "Why every photo, song, and program boils down to 0s and 1s.",
    href: "/articles/binary-explained",
  },
  {
    title: "Loops & Conditionals",
    desc: "Repeating steps and making decisions inside a program.",
  },
  {
    title: "Functions & Methods",
    desc: "Packaging logic into reusable, named building blocks.",
  },
  {
    title: "Debugging",
    desc: "Reading errors and narrowing down exactly where things went wrong.",
    href: "/articles/debugging-like-a-detective",
  },
  {
    title: "Version Control with Git",
    desc: "Saving snapshots of a project and collaborating without chaos.",
    href: "/articles/git-and-github-explained",
  },
  {
    title: "APIs & Structured Data",
    desc: "Asking a program for exactly what you need, and nothing else.",
    href: "/articles/what-is-an-api",
  },
  {
    title: "AI & Machine Learning",
    desc: "How models learn from examples instead of hard-coded rules.",
    href: "/articles/ml-beginners-guide",
  },
  {
    title: "Cybersecurity Basics",
    desc: "Passwords, phishing, and the habits that stop most attacks.",
    href: "/articles/cybersecurity-basics",
  },
];

function TopicEntry({ topic }: { topic: Topic }) {
  const content = (
    <>
      <h3 className="font-semibold text-heading group-hover:text-keyword-dim transition-colors">
        {topic.title}
        {topic.href && (
          <span className="inline-block ml-1 transition-transform group-hover:translate-x-1" aria-hidden>
            &rarr;
          </span>
        )}
      </h3>
      <p className="text-sm text-text-soft mt-1">{topic.desc}</p>
    </>
  );

  return topic.href ? (
    <Link href={topic.href} className="group block">
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
}

export default function LearningTopics() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-7">
      {TOPICS.map((topic) => (
        <TopicEntry key={topic.title} topic={topic} />
      ))}
    </div>
  );
}
