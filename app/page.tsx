import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    company: "Snowflake",
    location: "Menlo Park, CA",
    detail: "Data and AI Governance for Horizon Catalog",
    roles: [
      { title: "Software Engineer", dates: "May 2025 – Present" },
    ],
  },
  {
    company: "Amazon Web Services",
    location: "Arlington, VA",
    detail: "AWS Identity",
    roles: [
      { title: "Software Development Engineer", dates: "Apr 2024 – May 2025" },
      { title: "Software Development Engineer Intern", dates: "Jun 2023 – Sep 2023" },
    ],
  },
  {
    company: "TigerGraph",
    location: "Redwood City, CA",
    detail: "Database build and release pipeline",
    roles: [
      { title: "Software Engineer Intern", dates: "Jun 2022 – Sep 2022" },
    ],
  },
];

const publications = [
  {
    title: "dSTAR: Straggler Tolerant and Byzantine Resilient Distributed SGD",
    authors: "Jiahe Yan, Pratik Chaudhari, Leonard Kleinrock",
    venue:
      "3rd Workshop on New Frontiers in Adversarial Machine Learning (AdvML-Frontiers) @ NeurIPS 2024",
    year: "2024",
    summary:
      "A lightweight distributed SGD method that aggregates the first k worker responses and filters them with an ensemble median. dSTAR is straggler-tolerant and (α, f)-Byzantine resilient, with a linear convergence rate.",
    honors: [
      {
        label: "UCLA IRI Prize Winner, 2023–2024",
        href: "https://www.iri.ucla.edu/prize-winners-2023-2024/",
      },
    ],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2412.07151" },
      { label: "NeurIPS", href: "https://neurips.cc/virtual/2024/100204" },
    ],
  },
  {
    title:
      "Detection of t(9;22) Chromosome Translocation Using Deep Residual Neural Network",
    authors: "Jiahe Yan, Emily Tucci, Nathaniel Jaffe",
    venue: "Journal of Computer and Communications, 7(12), 102–111",
    year: "2019",
    summary:
      "A 50-layer ResNet that detects the Philadelphia chromosome translocation t(9;22) from chromosome images, reaching 97.5% validation accuracy.",
    honors: [
      {
        label: "Regeneron STS Scholar (Top 300), 2020",
        href: "https://www.societyforscience.org/regeneron-sts/2020-scholars/",
      },
    ],
    links: [
      {
        label: "Paper",
        href: "https://www.scirp.org/journal/paperinformation?paperid=97443",
      },
      { label: "DOI", href: "https://doi.org/10.4236/jcc.2019.712010" },
    ],
  },
];

const workshops = [
  {
    year: "2026",
    venue: "NeurIPS",
    name: "The Third Workshop on Agents in the Wild: Safety, Security, and Beyond",
    short: "AIWILD",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    name: "Who Verifies the Agents? Toward Reliable Agent Development",
    short: "Verify-Agents",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    name: "First Workshop on Meta Agents: Managing Agents that Manage Agents",
    short: "Meta-Agents",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    name: "Continual Learning for Enterprise AI Agents",
    short: "CLEA",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    name: "DynaFront: Dynamics at the Frontiers of Learning, Sampling, and Games",
    short: "DynaFront",
  },
  {
    year: "2026",
    venue: "NeurIPS",
    name: "Can We Trust the Judge? Building Reliable Evaluation for Language Models",
    short: "JUDGe",
  },
  {
    year: "2024",
    venue: "ICML",
    name: "Next Generation of AI Safety",
    short: "NextGenAISafety",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-base font-semibold tracking-wide uppercase text-gray-500 mb-6">
      {children}
    </h2>
  );
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-primary no-underline hover:underline"
    >
      {children}
      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-start gap-12 md:gap-16 min-h-[calc(100dvh-8.5rem)]">
        <div className="prose lg:prose-lg flex-1 md:max-w-prose">
          <h1 className="font-semibold">Hi, I&apos;m Jiahe 👋</h1>
          <p>
            Software engineer at Snowflake. Previously AWS and TigerGraph. I
            received my B.S. in Computer Science from UCLA in 2024, where I was
            fortunate to be mentored by{" "}
            <a
              href="https://www.lk.cs.ucla.edu/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leonard Kleinrock
            </a>
            , {" "}
            <a href="https://remy.wang/" target="_blank" rel="noopener noreferrer">
              Yisu Remy Wang
            </a>
            , and{" "}
            <a
              href="https://pratikac.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pratik Chaudhari
            </a>
            .
          </p>
          <p>
            I build databases, distributed systems, and agentic systems. I am
            particularly interested in making AI agents more capable and
            trustworthy through semantic context, well-scoped capabilities,
            least-privilege access, auditability, and runtime guardrails. I
            also work on secure and robust systems, including adversarial AI,
            data governance, and infrastructure for privacy-preserving computation.
          </p>
          <Link href="/blog" className="text-primary underline">
            Read the blog →
          </Link>
        </div>
      </section>

      <div className="w-full">
        <section
          id="experience"
          className="scroll-mt-24 py-14 border-t border-gray-200"
        >
          <SectionLabel>Experience</SectionLabel>
          <ol className="relative space-y-10 before:absolute before:left-[5px] before:top-1.5 before:bottom-1 before:w-px before:bg-gray-200">
            {experience.map((job) => (
              <li key={job.company} className="relative pl-8">
                <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-white ring-2 ring-gray-300" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-xl text-gray-900 m-0">
                    {job.company}
                  </h3>
                  <span className="text-gray-500">{job.location}</span>
                </div>
                <div className="mt-3 space-y-3">
                  {job.roles.map((role) => (
                    <div
                      key={role.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
                    >
                      <p className="text-lg text-gray-800 m-0">{role.title}</p>
                      <p className="text-gray-500 m-0 tabular-nums">
                        {role.dates}
                      </p>
                    </div>
                  ))}
                  <p className="text-gray-600 m-0">{job.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="education"
          className="scroll-mt-24 py-14 border-t border-gray-200"
        >
          <SectionLabel>Education</SectionLabel>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="font-semibold text-xl text-gray-900 m-0">
                University of California, Los Angeles
              </h3>
              <p className="text-lg text-gray-800 m-0 mt-1">B.S. Computer Science</p>
              <p className="text-gray-500 m-0 mt-1">
                GPA 3.869 / 4.0 · Los Angeles, CA
              </p>
            </div>
            <p className="text-gray-500 m-0 tabular-nums">2020 – 2024</p>
          </div>
        </section>

        <section
          id="research"
          className="scroll-mt-24 py-14 border-t border-gray-200"
        >
          <SectionLabel>Research</SectionLabel>
          <ul className="space-y-6 list-none p-0 m-0">
            {publications.map((paper) => (
              <li
                key={paper.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {paper.year}
                  </span>
                  {paper.honors.map((honor) => (
                    <a
                      key={honor.label}
                      href={honor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-50 text-primary no-underline hover:bg-blue-100"
                    >
                      {honor.label}
                    </a>
                  ))}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 m-0 leading-snug">
                  {paper.title}
                </h3>
                <p className="mt-1.5 mb-0 text-gray-500">
                  {paper.authors}
                </p>
                <p className="mt-1 mb-0 text-gray-600 italic">
                  {paper.venue}
                </p>
                <p className="mt-3 mb-0 text-gray-700 leading-relaxed">
                  {paper.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {paper.links.map((link) => (
                    <ExtLink key={link.href} href={link.href}>
                      {link.label}
                    </ExtLink>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="service" className="scroll-mt-24 py-14 border-t border-gray-200">
          <SectionLabel>Service</SectionLabel>
          <ul className="list-disc pl-5 text-lg text-gray-800">
            <li>
              Reviewer
              <ul className="mt-2 list-disc pl-5 space-y-1 text-base text-gray-600">
                {workshops.map((ws) => (
                  <li key={`${ws.short}-${ws.year}`}>
                    {ws.venue} {ws.year}: {ws.name} ({ws.short})
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
