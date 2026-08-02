// lib/chatbot-data.ts
// Rule-based knowledge base for the Tinzwave website assistant.
// No external API — every answer is matched locally from this file.

import { courses } from "./courses-data";

export interface FAQEntry {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
}

const coursesList = courses
  .map((c) => `• ${c.title} (${c.category}) — ${c.duration}, ${c.price}`)
  .join("\n");

export const faqData: FAQEntry[] = [
  {
    id: "greeting",
    question: "Hello",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "yo"],
    answer:
      "Hey there! 👋 I'm the Tinzwave assistant. I can tell you about our services, courses, pricing, and how to reach us. What would you like to know?",
  },
  {
    id: "what-is-tinzwave",
    question: "What is Tinzwave?",
    keywords: [
      "what is tinzwave", "who is tinzwave", "about tinzwave", "what does tinzwave do",
      "tell me about tinzwave", "company", "who are you", "what do you do",
    ],
    answer:
      "Tinzwave is a technology company on a mission to empower Africa through technology and world-class digital skills training. We operate across three divisions:\n\n• Tinzwave AI Academy — practical tech training\n• Tinzwave Labs — software & AI development for businesses\n• Tinzwave Workspace — a professional space for training, meetings, and events\n\nWe've trained 500+ students, delivered 50+ projects, and maintain a 98% success rate.",
  },
  {
    id: "mission-vision",
    question: "What is Tinzwave's mission and vision?",
    keywords: ["mission", "vision", "goal", "purpose", "why tinzwave"],
    answer:
      "Our Mission: to empower African businesses, institutions, and individuals with AI-powered technology solutions and world-class digital skills training that drive innovation, growth, and transformation across the continent.\n\nOur Vision: to be Africa's leading technology company, recognized for innovative solutions and excellence in digital skills training.",
  },
  {
    id: "values",
    question: "What are Tinzwave's core values?",
    keywords: ["values", "core values", "principles", "culture"],
    answer:
      "Our core values are:\n\n• Innovation — pushing boundaries to solve real problems\n• Empowerment — equipping people and organizations with skills and technology\n• Excellence — the highest standards in everything we do\n• Collaboration — working closely with clients to deliver tailored solutions",
  },
  {
    id: "team",
    question: "Who is on the Tinzwave team?",
    keywords: ["team", "founder", "ceo", "cto", "who runs tinzwave", "leadership", "staff"],
    answer:
      "Tinzwave is led by:\n\n• Agbo Martins Ejiofor — CEO/Founder\n• Tochukwu (Ukoha) Victor — Chief Technology Officer\n• Ihionkhan Shalom — Project/Product Manager\n• Emeka (Jude) Okonkwo — Lead Digital Marketing\n• Habeeb Oluwanishola — Software Developer\n• Ajala Abdullah — Software Developer\n\nYou can read more on our About page.",
  },
  {
    id: "services-overview",
    question: "What services does Tinzwave offer?",
    keywords: [
      "services", "what services", "offer", "offerings", "ecosystem", "divisions",
      "what can you do", "what do you offer",
    ],
    answer:
      "We offer services across three divisions:\n\n🎓 Tinzwave AI Academy — AI Engineering, Fullstack Web (MERN), Mobile Development, Digital Marketing, bootcamps & corporate training\n\n💻 Tinzwave Labs — AI solutions & automation, web & mobile app development, business process automation, MVP development, enterprise software\n\n🏢 Tinzwave Workspace — training space rentals, meeting rooms, tech events, virtual office, co-working space\n\nAsk me about any of these in more detail!",
  },
  {
    id: "web-development",
    question: "Do you build websites / web apps?",
    keywords: [
      "web development", "website", "web app", "web application", "build a website",
      "react", "next.js", "frontend", "backend",
    ],
    answer:
      "Yes! Tinzwave Labs builds modern, responsive, and scalable web applications using React, Next.js, TypeScript, and Tailwind CSS — from business websites to complex web platforms. Reach out via our Contact page to discuss your project.",
  },
  {
    id: "mobile-development",
    question: "Do you build mobile apps?",
    keywords: ["mobile app", "mobile development", "android", "ios", "react native", "flutter", "app development"],
    answer:
      "Yes, we design and build native and cross-platform mobile apps using React Native, Swift, Kotlin, and Flutter — focused on performance, UX, and business growth.",
  },
  {
    id: "ai-automation",
    question: "Do you offer AI solutions / automation / chatbots?",
    keywords: [
      "ai solutions", "ai automation", "chatbot", "automation", "rag", "artificial intelligence services",
      "machine learning services", "ai agent", "business process automation",
    ],
    answer:
      "Yes — Tinzwave Labs builds intelligent chatbots, RAG (retrieval-augmented generation) systems, predictive analytics, and business process automation that streamline operations and cut manual work. We also build neural network and NLP/computer vision solutions.",
  },
  {
    id: "software-development",
    question: "Do you do custom software / enterprise software?",
    keywords: [
      "software development", "custom software", "enterprise software", "mvp", "startup mvp",
      "scalable software", "system design",
    ],
    answer:
      "Yes. We design, build, and deploy scalable software — from rapid MVPs for startups to enterprise-grade systems with cloud architecture, DevOps, and robust security.",
  },
  {
    id: "digital-marketing",
    question: "Do you offer digital marketing services?",
    keywords: [
      "digital marketing", "marketing", "seo", "social media marketing", "ads", "content marketing", "branding",
    ],
    answer:
      "Yes, our digital marketing services cover SEO, social media marketing, content marketing, Google/Facebook ads, email marketing, and analytics — to grow your brand's visibility and results.",
  },
  {
    id: "academy-overview",
    question: "Tell me about the Tinzwave Academy",
    keywords: ["academy", "tech academy", "ai academy", "training hub"],
    answer:
      "Tinzwave AI Academy offers high-quality, practical training in AI Engineering, Fullstack Web Development (MERN), Mobile Development, and Digital Marketing — through bootcamps, professional courses, workshops, and corporate training programs. We train individuals, corporate teams, secondary schools, and universities.",
  },
  {
    id: "courses-list",
    question: "What courses do you offer?",
    keywords: [
      "courses", "course list", "what courses", "programs", "bootcamp", "classes",
      "learn", "training programs", "curriculum",
    ],
    answer: `Here are our current courses:\n\n${coursesList}\n\nAsk me about pricing, duration, or how to enroll — or visit the Courses page for full details on each one.`,
  },
  {
    id: "courses-pricing",
    question: "How much do courses cost?",
    keywords: ["price", "pricing", "cost", "how much", "fee", "fees", "tuition"],
    answer:
      "Course prices range from ₦100,000 for most 2-month courses up to ₦400,000 for the 4-month Data Science Bootcamp. Here's the full breakdown:\n\n" +
      coursesList +
      "\n\nAll courses are available in Physical and Virtual modes.",
  },
  {
    id: "how-to-enroll",
    question: "How do I enroll in a course?",
    keywords: ["enroll", "enrol", "sign up", "register", "join a course", "apply", "how to join", "admission"],
    answer:
      "To enroll: browse our Courses page, pick a course, and click 'View Details' for enrollment info — or just message us directly on WhatsApp or the Contact page and our team will guide you through registration and payment.",
  },
  {
    id: "course-mode",
    question: "Are courses online or physical?",
    keywords: ["online", "virtual", "physical", "in person", "remote", "location of classes", "hybrid"],
    answer:
      "Every course is available in both Physical (in-person at our Lagos workspace) and Virtual (online) modes — pick whichever suits you best.",
  },
  {
    id: "who-trains",
    question: "Who do you train?",
    keywords: ["who do you train", "individuals", "corporate training", "schools", "universities", "who can enroll"],
    answer:
      "We train four groups:\n\n• Individuals — self-paced or instructor-led courses\n• Corporate Teams — custom upskilling programs\n• Secondary Schools — tech education & workshops\n• Universities — partnerships, curriculum support, guest lectures",
  },
  {
    id: "workspace",
    question: "Tell me about Tinzwave Workspace",
    keywords: [
      "workspace", "coworking", "co-working", "meeting room", "training room", "event space",
      "rent a space", "hot desk", "virtual office",
    ],
    answer:
      "Tinzwave Workspace is a professional environment for learning, collaboration, and events in Surulere, Lagos. It offers:\n\n• Training Rooms (up to 50 people)\n• Meeting Rooms (up to 20 people)\n• Event Space (up to 100 people)\n• Co-working Space (30+ workstations)\n• Virtual Office services\n• Corporate Events & Retreats\n\nAll spaces come with high-speed WiFi, AV equipment, air conditioning, and 24/7 security.",
  },
  {
    id: "contact",
    question: "How can I contact Tinzwave?",
    keywords: [
      "contact", "reach you", "email", "phone", "phone number", "call", "get in touch",
      "whatsapp", "talk to someone", "customer service",
    ],
    answer:
      "You can reach us via:\n\n📧 Email: info@tinzwave.com\n📞 Phone: +234 916 105 2706\n💬 WhatsApp: wa.me/2349161052706 (fastest response)\n\nOr use the contact form on our Contact page.",
  },
  {
    id: "location",
    question: "Where is Tinzwave located?",
    keywords: ["location", "address", "where are you", "office", "visit", "directions", "lagos", "surulere"],
    answer:
      "Our office is at E6 Adeniran Ogunsanya Shoprite Mall, Surulere, Lagos 100001, Nigeria. Check the Contact page for a map and directions.",
  },
  {
    id: "social",
    question: "What are Tinzwave's social media handles?",
    keywords: ["social media", "facebook", "twitter", "instagram", "linkedin", "follow you"],
    answer:
      "You can follow us at:\n\n• Facebook: facebook.com/tinzwave\n• Twitter/X: twitter.com/tinzwave\n• Instagram: instagram.com/tinzwave\n• LinkedIn: linkedin.com/company/tinzwave",
  },
  {
    id: "blog",
    question: "Does Tinzwave have a blog?",
    keywords: ["blog", "articles", "posts", "news"],
    answer: "Yes! Check out our Blog page for articles on technology, AI, and career tips.",
  },
  {
    id: "gallery",
    question: "Do you have a gallery?",
    keywords: ["gallery", "photos", "pictures", "events photos"],
    answer: "Yes, visit our Gallery page to see photos from our training sessions, events, and community gatherings.",
  },
  {
    id: "thanks",
    question: "Thank you",
    keywords: ["thank", "thanks", "appreciate", "cool", "great", "nice", "awesome"],
    answer: "You're welcome! 😊 Is there anything else you'd like to know about Tinzwave?",
  },
  {
    id: "bye",
    question: "Goodbye",
    keywords: ["bye", "goodbye", "see you", "later", "exit"],
    answer: "Thanks for chatting! If you have more questions later, I'll be right here. 👋",
  },
];

export const quickReplies: { label: string; id: string }[] = [
  { label: "Our Services", id: "services-overview" },
  { label: "Courses & Pricing", id: "courses-pricing" },
  { label: "Contact Us", id: "contact" },
  { label: "About Tinzwave", id: "what-is-tinzwave" },
];

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "of", "for", "to", "you", "your", "i",
  "me", "my", "in", "on", "at", "and", "or", "what", "how", "can", "with", "about",
  "tinzwave", "it", "please", "would", "like", "want", "know",
]);

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function findAnswer(input: string): FAQEntry | null {
  const normalizedInput = normalize(input);
  if (!normalizedInput) return null;

  const inputWords = normalizedInput
    .split(" ")
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));

  let bestEntry: FAQEntry | null = null;
  let bestScore = 0;

  for (const entry of faqData) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalize(keyword);
      if (!normalizedKeyword) continue;

      if (normalizedInput.includes(normalizedKeyword)) {
        score += normalizedKeyword.split(" ").length * 2;
        continue;
      }

      const keywordWords = normalizedKeyword.split(" ");
      const matchedWords = keywordWords.filter((kw) => inputWords.includes(kw));
      score += matchedWords.length;
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestScore > 0 ? bestEntry : null;
}

export const fallbackAnswer =
  "I don't have a specific answer for that yet, but I'd love to help you find it. Try asking about our services, courses, pricing, or how to contact us — or reach our team directly on WhatsApp for anything more specific.";
