// lib/martins-data.ts
// Content source of truth: martins-portfolio-content.md (repo root).
// Fields left `undefined` render as a graceful "coming soon" state in the UI —
// never leave a bracket placeholder like "[TBD]" in these values.

export interface ExperienceEntry {
  title: string
  company?: string
  period: string
  description?: string
}

export interface EducationEntry {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface ContactLink {
  id: "email" | "linkedin" | "github" | "ai-interviewer"
  label: string
  href?: string
}

export interface ProjectStat {
  label: string
  value?: string
}

export interface Project {
  id: string
  name: string
  flagship?: boolean
  description: string
  role?: string
  techStack?: string[]
  liveUrl?: string
  image?: string
  stats?: ProjectStat[]
}

export interface Testimonial {
  quote: string
  name: string
  outcome?: string
}

/**
 * One entry per training cohort/year. To add a new cohort, just push a new
 * object onto this array — no other code changes needed. Leave `studentsCount`,
 * `photo`, or `testimonials` out entirely if not yet available; the journey
 * page renders a clean placeholder for whatever's missing.
 */
export interface Cohort {
  id: string
  year: string
  studentsCount?: string
  photo?: string
  testimonials?: Testimonial[]
}

export const founder = {
  name: "Agbo Martins Ejiofor",
  title: "Founder, Tinzwave Technology · Software Engineer · Educator",
  intro:
    "From security guard to software founder — I build products, and I train the people who'll build the next generation of them.",
  story: [
    "In 2021, I moved to Lagos and worked as a security guard. In 2022, I enrolled at the National Open University of Nigeria. In 2023, I taught myself to code, and by October of that year I'd landed my first job in tech. From there, I worked across multiple companies as a software developer, building real products for real users, before founding my own company: Tinzwave Technology.",
    "That path isn't a detour I'm quiet about — it's the reason I care so much about making tech genuinely accessible to people who don't come from a traditional background in it, because I didn't either.",
    "Today, Tinzwave is where I bring that together: building software, training people to build it themselves, and giving Lagos's tech community a physical home to do both.",
    "I'm currently preparing for graduate study abroad in software engineering, to deepen my technical grounding and build an international network I can bring back to Tinzwave and Nigeria's tech ecosystem.",
  ],
  photo: "/team-agbo-martins.jpg" as string | undefined,
}

export const experience: ExperienceEntry[] = [
  {
    title: "Founder, Tinzwave Technology",
    period: "Present",
    description:
      "Founded and lead an integrated technology company spanning software development, AI training, and community building.",
  },
  {
    title: "Software Developer",
    period: "Since October 2023",
  },
]

export const education: EducationEntry[] = [
  {
    degree: "BSc, Public Administration",
    institution: "National Open University of Nigeria",
    year: "2026",
    description:
      "Chose this field deliberately alongside my tech career, to build a stronger grounding in leadership and organizational thinking.",
  },
  {
    degree: "Self-directed technical training",
    institution: "Independent study",
    year: "2023",
    description:
      "Taught myself software development, leading to my first professional tech role in October 2023.",
  },
]

export const skills: string[] = [
  "Python",
  "JavaScript/React",
  "MERN Stack",
  "Mobile Development",
  "AI/ML Engineering",
  "Product Development",
  "Team Leadership & Training",
]

export const contactLinks: ContactLink[] = [
  { id: "email", label: "Email", href: "mailto:martins@tinzwave.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/" },
  { id: "github", label: "GitHub", href: "https://github.com/martins091" },
  { id: "ai-interviewer", label: "AI Interviewer", href: "https://interviewai.tinzwave.com" },
]

export const projects: Project[] = [
  {
    id: "ai-interviewer",
    name: "Tinzwave AI Interviewer",
    flagship: true,
    description:
      "A live, video-based AI mock-interview coach that helps job seekers practice real interviews and get instant feedback on clarity, confidence, and technical knowledge. Real, paying users — not a prototype.",
    role: "Founder",
    liveUrl: "https://interviewai.tinzwave.com",
    stats: [
      { label: "Users", value: undefined },
      { label: "Interview sessions", value: undefined },
      { label: "Rating", value: undefined },
    ],
  },
  {
    id: "tinzwave-labs",
    name: "Tinzwave Labs — Client & Internal Projects",
    description:
      "Custom AI solutions, business automation, and web/mobile applications delivered for startups and enterprise clients.",
    role: "Founder",
    stats: [{ label: "Projects delivered", value: "50+" }],
  },
]

export const trainingStats = {
  studentsTrained: "500+",
}

/**
 * No cohort data yet — the /martins/journey page renders a "coming soon"
 * empty state until entries are added here. See the `Cohort` interface above
 * for the shape of a new entry.
 */
export const cohorts: Cohort[] = []
