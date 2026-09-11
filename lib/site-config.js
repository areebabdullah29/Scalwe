export const siteConfig = {
  name: "Scalwe",
  title: "Scalwe | AI Development & Digital Engineering",
  description:
    "Scalwe builds AI systems, SaaS platforms, mobile apps, cloud infrastructure, data pipelines, and automation solutions for modern businesses.",
  url: "https://www.scalwe.com",
  email: "hello@scalwe.com",
  phone: "+1-555-123-4567",
  keywords: [
    "AI development company",
    "SaaS development agency",
    "mobile app development",
    "cloud and DevOps consulting",
    "data engineering services",
    "AI automation",
    "staff augmentation",
    "technical consulting",
  ],
  stats: [
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
    { value: 40, suffix: "+", label: "Engineers & specialists" },
    { value: 24, suffix: "/7", label: "Support coverage" },
  ],
  techStack: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Django", "PostgreSQL", "GraphQL"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "AI & Data",
      items: ["PyTorch", "OpenAI", "LangChain", "Airflow", "Snowflake"],
    },
  ],
  // Placeholder portfolio items — replace each entry with a real project
  // (title, one-line result, category, icon key from ServiceIcons) before launch.
  portfolioCategories: ["All", "AI & Automation", "Web & SaaS", "Mobile", "Cloud & Data"],
  portfolio: [
    {
      id: "p1",
      title: "Add your first project",
      result: "Replace this card in lib/site-config.js",
      category: "AI & Automation",
      icon: "ai-development",
      scene: "ai",
    },
    {
      id: "p2",
      title: "Add your second project",
      result: "Replace this card in lib/site-config.js",
      category: "Web & SaaS",
      icon: "saas-development",
      scene: "web",
    },
    {
      id: "p3",
      title: "Add your third project",
      result: "Replace this card in lib/site-config.js",
      category: "Mobile",
      icon: "mobile-development",
      scene: "mobile",
    },
    {
      id: "p4",
      title: "Add your fourth project",
      result: "Replace this card in lib/site-config.js",
      category: "Cloud & Data",
      icon: "cloud-devops",
      scene: "cloud",
    },
  ],
  testimonials: [
    {
      quote:
        "Scalwe became an extension of our team. They shipped our MVP in weeks, not quarters, without cutting corners on architecture.",
      name: "Founder",
      role: "Early-stage SaaS startup",
    },
    {
      quote:
        "Their DevOps overhaul cut our deployment time from hours to minutes and gave us real visibility into production for the first time.",
      name: "VP of Engineering",
      role: "Series B fintech company",
    },
    {
      quote:
        "We brought Scalwe in for AI automation and they stayed on as long-term staff augmentation. Consistently senior-level work.",
      name: "Head of Product",
      role: "B2B logistics platform",
    },
  ],
  faqs: [
    {
      question: "What industries do you typically work with?",
      answer:
        "We work primarily with SaaS startups, fintech, logistics, and healthtech companies, but our engineering practices translate well to any team that needs custom software, AI capability, or cloud infrastructure.",
    },
    {
      question: "Do you price projects fixed-bid or hourly?",
      answer:
        "Both. Well-scoped projects work well as fixed-bid engagements. Ongoing product work, staff augmentation, and evolving roadmaps are typically billed monthly or hourly with transparent time tracking.",
    },
    {
      question: "How quickly can you start?",
      answer:
        "Most engagements kick off within 1-2 weeks of an initial call, once scope and team composition are confirmed. Urgent needs can sometimes be accommodated faster.",
    },
    {
      question: "Can you embed engineers into our existing team?",
      answer:
        "Yes — staff augmentation is one of our core offerings. We embed senior engineers directly into your existing workflows, tools, and standups rather than working as a separate black-box team.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes. We offer ongoing maintenance, monitoring, and iteration retainers after launch, so the team that built your system stays available as it grows.",
    },
    {
      question: "What happens after I reach out?",
      answer:
        "You'll hear back from us within 24 hours to schedule a short discovery call. From there we scope the engagement and typically propose a starting point within a few business days.",
    },
  ],
  services: [
    {
      slug: "ai-development",
      name: "AI Development",
      description:
        "Custom AI products, predictive systems, intelligent workflows, and model-driven experiences.",
    },
    {
      slug: "saas-development",
      name: "SaaS Development",
      description:
        "Scalable product architecture, customer workflows, dashboards, and cloud-native SaaS platforms.",
    },
    {
      slug: "mobile-development",
      name: "Mobile Development",
      description:
        "High-performing apps for iOS and Android with user-focused design and robust backend integration.",
    },
    {
      slug: "cloud-devops",
      name: "Cloud & DevOps",
      description:
        "Deployment pipelines, infrastructure automation, observability, and secure platform operations.",
    },
    {
      slug: "data-engineering",
      name: "Data Engineering",
      description:
        "Modern data pipelines, warehousing, transformation workflows, and analytics enablement.",
    },
    {
      slug: "ai-automation",
      name: "AI Automation",
      description:
        "Automated operations, workflow orchestration, and intelligent process improvements across teams.",
    },
    {
      slug: "staff-augmentation",
      name: "Staff Augmentation",
      description:
        "Senior engineers and specialists embedded into your team to accelerate delivery without overhead.",
    },
    {
      slug: "technical-consulting",
      name: "Technical Consulting",
      description:
        "Architecture guidance, product strategy, technical roadmaps, and digital transformation advisory.",
    },
  ],
};
