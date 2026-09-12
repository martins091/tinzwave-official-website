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

export interface TeachingRole {
  organization: string
  role: string
  period?: string
  description?: string
}

export interface Partnership {
  id: string
  name: string
  description: string
  location?: string
  contact?: string
  image?: string
}

export interface ImpactPhoto {
  src: string
  alt: string
  caption: string
}

export interface ImpactTestimonial {
  quote: string
  name: string
  role: string
  source?: string
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

export const teachingRoles: TeachingRole[] = [
  {
    organization: "Tinzwave AI Academy",
    role: "Founder & Lead Instructor",
    period: "2024 – Present",
    description:
      "Building and running Tinzwave's own bootcamps in AI engineering, the MERN stack, mobile development, and digital marketing.",
  },
  {
    organization: "Melodia Coding Academy",
    role: "Lead Instructor",
    description:
      "Led cohorts of aspiring developers through hands-on software development training — including an on-site training engagement with the NIMC (National Identity Management Commission) team, arranged through Melodia.",
  },
  {
    organization: "New Horizons Computer Education",
    role: "Fullstack Instructor",
    description:
      "Taught fullstack web development, breaking down complex concepts for students starting from scratch.",
  },
  {
    organization: "Leinard Studios",
    role: "Fullstack Instructor",
    description:
      "Trained aspiring developers in fullstack web development.",
  },
]

export const partnerships: Partnership[] = [
  {
    id: "bariga-lcda",
    name: "Bariga LCDA Youth Training Empowerment",
    description:
      "Partnered with Bariga Local Council Development Area (Lagos State) to train local youth in software development and AI, as part of the council's Information Technology Empowerment Program. I led the training personally.",
    location: "19, Bawala Street, Bariga, Lagos State",
    image: "/images/impact/bariga-lcda-banner.jpg",
  },
  {
    id: "jonsog-college",
    name: "Jonsog College",
    description:
      "Partnered with Jonsog College to train secondary school students in coding and AI, delivered alongside my Tinzwave team.",
    location: "34, Oladeinde Coker Street, off Sadiku, Ilasamaja, Lagos State",
    contact: "09098850251",
    image: "/images/impact/jonsog-college-classroom.jpg",
  },
]

export const impactGallery: ImpactPhoto[] = [
  {
    src: "/images/impact/tinzwave-cert-group.jpg",
    alt: "Agbo Martins Ejiofor with two Tinzwave AI Academy graduates holding their certificates of completion",
    caption: "Tinzwave AI Academy — certificate presentation",
  },
  {
    src: "/images/impact/tinzwave-cohort-certificates.jpg",
    alt: "A cohort of Tinzwave AI Academy graduates holding certificates of completion",
    caption: "Tinzwave AI Coding Bootcamp — cohort graduation",
  },
  {
    src: "/images/impact/tinzwave-cohort-graduates.jpg",
    alt: "Four Tinzwave graduates holding their certificates of completion with their instructor",
    caption: "Tinzwave Fullstack Development — cohort graduation",
  },
  {
    src: "/images/impact/tinzwave-teaching.jpg",
    alt: "Agbo Martins Ejiofor teaching a live coding class with code projected on screen",
    caption: "Teaching a live coding session",
  },
  {
    src: "/images/impact/melodia-coding-academy-certs.jpg",
    alt: "Melodia Coding Academy students holding certificates of completion",
    caption: "Melodia Coding Academy — cohort graduation",
  },
  {
    src: "/images/impact/nimc-training.jpg",
    alt: "Agbo Martins Ejiofor training the NIMC team on software development",
    caption: "Training the NIMC team, via Melodia Coding Academy",
  },
  {
    src: "/images/impact/new-horizons-classroom.jpg",
    alt: "Students on laptops during a New Horizons Computer Education class",
    caption: "New Horizons Computer Education — classroom session",
  },
  {
    src: "/images/impact/bariga-lcda-hall.jpg",
    alt: "Youth trainees on laptops during the Bariga LCDA Information Technology Empowerment Program",
    caption: "Bariga LCDA — youth training in session",
  },
  {
    src: "/images/impact/content-creation-lesson.jpg",
    alt: "Agbo Martins Ejiofor teaching a digital marketing and content creation lesson",
    caption: "Teaching digital marketing fundamentals",
  },
  {
    src: "/images/impact/team-training-session.jpg",
    alt: "A group of trainees seated at desks with laptops during a training session",
    caption: "Hands-on lab session",
  },
]

export const impactTestimonials: ImpactTestimonial[] = [
  {
    quote:
      "Behind every successful young builder is a mentor who took a massive gamble on them before they had a track record to prove it. For me, that gamble was named Mr. Martins. He was first my instructor at New Horizons Computer Learning Centers, breaking down complex concepts and pushing me to think deeper. Then he became my boss at Tinzwave Technologies, giving me the actual stage and real-world opportunities to showcase my skills when I was just getting started. Thank you, Martins Ejiofor, for always standing by me, for opening doors I didn't even know existed, and for believing in my vision before it even became a reality.",
    name: "Ajala Abdullah",
    role: "Software Engineer",
    source: "LinkedIn",
  },
  {
    quote:
      "Martins doesn't just teach syntax — he teaches you how to think like a developer. He was patient with every question I had, and I walked away from his class with real, usable skills I'm still building my career on.",
    name: "Habeeb Onishola",
    role: "Tinzwave Graduate",
  },
  {
    quote:
      "I came in barely knowing the basics. Martins broke everything down in a way that finally made sense, and pushed me to keep going even when I wanted to quit. I'm building my career in tech today because of that foundation.",
    name: "Amarachi Okafor",
    role: "Tinzwave Graduate",
  },
  {
    quote:
      "What stood out to me about Martins as an instructor was how much he genuinely cared about us actually understanding the material, not just finishing the syllabus. That mentorship is a big part of why I'm still growing in this career today.",
    name: "Gloria Ejiofor",
    role: "Tinzwave Graduate",
  },
]
