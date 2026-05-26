export const headerData = {
  utilityLinks: [
    { label: "ADMISSION FORM", href: "#admission-form" },
    { label: "EXPERT TRUCTES", href: "#trustees" },
    { label: "ACADEMIAS", href: "#academics-portal" },
    { label: "ACCESSIBILITY", href: "#accessibility" },
  ],
  navItems: [
    { label: "HOME", href: "#home" },
    { 
      label: "ABOUT US", 
      href: "#about-us",
      dropdown: [
        { label: "Our History", href: "#history" },
        { label: "Vision & Mission", href: "#vision" },
        { label: "Leadership", href: "#leadership" }
      ]
    },

    { label: "ADMISSIONS", href: "#admissions" },
    { label: "ACADEMICS", href: "#academics" },
    { label: "CONTACT", href: "#contact" },
  ]
};

export const sliderImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600"
];

export const sidebarData = {
  quickLinks: [
    { label: "Admissions 2026-27", href: "#admissions" },
    { label: "Examination Portal", href: "https://nursing-test.netlify.app/" },
    { label: "Research & Development", href: "#research" }
  ],
  events: [
    {
      day: "28",
      month: "MAY",
      title: "National Leadership Summit 2026",
      location: "Main Auditorium, Pune Campus"
    },
    {
      day: "05",
      month: "JUN",
      title: "International HR Conclave",
      location: "BIMHRD Seminar Hall"
    }
  ],
  newsFeed: [
    {
      title: "BIMM Ranked Among Top 10 B-Schools in Maharashtra by Business Today.",
      date: "May 22, 2026",
      isNew: true
    },
    {
      title: "Registration deadline extended for Nursing Executive Program.",
      date: "May 10, 2026",
      isNew: false
    }
  ]
};

export const institutesData = [
  {
    id: 1,
    name: "Balaji Institute of Nursing (BIMN), Nashik",
    description: "Balaji Institute of Nursing (BIMM), Nashik. Providing top-tier academic standards, robust infrastructures, and excellent dynamic placements.",
    websiteUrl: "#bimm-web",
    coursesUrl: "#bimm-courses",
    gallery: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=500",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500"
    ]
  },
];
export const featuresData = [
  {
    icon: "🎓",
    title: "World-Class Faculty",
    desc: "Learn from industry veterans, PhD scholars, and top corporate mentors driving academic excellence."
  },
  {
    icon: "🔬",
    title: "Advanced Research Labs",
    desc: "State-of-the-art infrastructure, high-tech computer labs, and smart digital classrooms."
  },
  {
    icon: "🌍",
    title: "Global Alum Networks",
    desc: "Connect with thousands of successful alumni placed across global corporate leadership roles."
  }
];