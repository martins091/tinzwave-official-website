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

export interface StoryMilestone {
  year: string
  label: string
  description: string
}

export const founder = {
  name: "Agbo Martins Ejiofor",
  title: "Founder, Tinzwave Technology · Software Engineer · Educator",
  intro:
    "From security guard to software founder — I build products, and I train the people who'll build the next generation of them.",
  story: {
    lede:
      "The short version: security guard to software founder in three years. The longer version is the reason Tinzwave exists.",
    timeline: [
      {
        year: "2021",
        label: "Moved to Lagos",
        description: "Worked as a security guard while figuring out my next move.",
      },
      {
        year: "2022",
        label: "Back to school",
        description: "Enrolled at the National Open University of Nigeria.",
      },
      {
        year: "2023",
        label: "Taught myself to code",
        description:
          "By October, I'd landed my first job in tech, at Tezza Business Solutions Ltd.",
      },
      {
        year: "2024 – Present",
        label: "Founded Tinzwave Technology",
        description:
          "Worked across multiple companies as a software developer, building real products for real users, before founding my own company.",
      },
    ] satisfies StoryMilestone[],
    quote:
      "That path isn't a detour I'm quiet about — it's the reason I care so much about making tech genuinely accessible to people who don't come from a traditional background in it, because I didn't either.",
    today:
      "Today, Tinzwave is where I bring that together: building software, training people to build it themselves, and giving Lagos's tech community a physical home to do both.",
    next:
      "I'm currently preparing for a Master's in Software Engineering and Artificial Intelligence abroad, to deepen my technical grounding and build an international network I can bring back to Tinzwave and Nigeria's tech ecosystem.",
  },
  photo: "/team-agbo-martins.jpg" as string | undefined,
}

export const experience: ExperienceEntry[] = [
  {
    title: "Founder, Tinzwave Technology",
    period: "Since 2024",
    description:
      "Founded and lead an integrated technology company spanning software development, AI training, and community building.",
  },
  {
    title: "Software Developer",
    company: "Tezza Business Solutions Ltd",
    period: "Since October 2023",
  },
]

export const education: EducationEntry[] = [
  {
    degree: "BSc, Public Administration",
    institution: "National Open University of Nigeria",
    year: "2022 – 2026",
    description:
      "Enrolled in 2022, before I knew tech was where I'd end up. It's turned out to matter anyway — it gave me a real grounding in leadership and organizational thinking that shows up every day in how I run Tinzwave and lead my team.",
  },
  {
    degree: "Self-directed technical training",
    institution: "Independent study",
    year: "2023",
    description:
      "Taught myself software development, leading to my first professional tech role in October 2023.",
  },
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
    image: "/images/projects/ai-interviewer.jpg",
    stats: [
      { label: "Users", value: "2,000+" },
      { label: "Rating", value: "4.9/5" },
    ],
  },
  {
    id: "nairagame",
    name: "NairaGame",
    description:
      "A Nigerian gaming ecosystem — esports tournaments, a gamer community, marketplace, events, and game cafes, all in one platform.",
    role: "Full-Stack Developer",
    liveUrl: "https://www.nairagame.com",
    image: "/images/projects/nairagame.jpg",
  },
  {
    id: "kizfarm",
    name: "KizFarm",
    description:
      "An agritech marketplace connecting verified farmers with buyers — fast delivery, order tracking, and secure payments, from farm to home.",
    role: "Full-Stack Developer",
    liveUrl: "https://www.kizfarm.com",
    image: "/images/projects/kizfarm.jpg",
  },
  {
    id: "completelyart",
    name: "CompletelyArt",
    description:
      "Nigeria's creative marketplace connecting artists and designers with clients — custom artwork, branding, and design commissions, delivered fast.",
    role: "Full-Stack Developer",
    liveUrl: "https://www.completelyart.ng",
    image: "/images/projects/completelyart.jpg",
  },
  {
    id: "divone",
    name: "DIVONE",
    description:
      "A premium women's fashion e-commerce store, built with a full shopping experience — new arrivals, order tracking, and a polished checkout.",
    role: "Full-Stack Developer",
    liveUrl: "https://www.divone.store",
    image: "/images/projects/divone.jpg",
  },
  {
    id: "lush-hair-africa",
    name: "Lush Hair Africa",
    description:
      "A hair extensions and haircare e-commerce store for the Nigerian market, complete with an AI hair try-on feature and nationwide delivery.",
    role: "Full-Stack Developer",
    liveUrl: "https://nigeria.lushhairafrica.com",
    image: "/images/projects/lushhair.jpg",
  },
  {
    id: "hilwa-heights",
    name: "Hilwa Heights",
    description:
      "A marketing site for six private, fully furnished and staffed luxury residences in Maitama, Abuja — a refined presentation built for private, high-end enquiries.",
    role: "Full-Stack Developer",
    liveUrl: "https://www.hilwaheights.com",
    image: "/images/projects/hilwaheights.jpg",
  },
]

export const projectsDelivered = "50+"

export const otherClientWorkNote =
  "Beyond what's shown here, I've built 100+ other custom websites and apps for clients across e-commerce, real estate, and more through Tinzwave Labs."

export const trainingStats = {
  studentsTrained: "800+",
}

export const trainingImpactSummary =
  "Across tech academies I've worked with, Tinzwave AI Academy, and a training partnership with local government, I've trained software developers and AI engineers from the ground up — some now working abroad, some hired at top companies, others building their own careers in the field."

export const impactHighlights: string[] = [
  "Now working abroad",
  "Hired at top companies",
  "Building their own tech careers",
]

/**
 * No cohort data yet — the /martins/journey page renders a "coming soon"
 * empty state until entries are added here. See the `Cohort` interface above
 * for the shape of a new entry.
 */
export const cohorts: Cohort[] = []
