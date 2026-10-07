export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  year?: string;
  image: string;
  tone: "light" | "dark" | "blue" | "warm";
  featured?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Paybek",
    category: "Fintech · Money Transfer · Logo Design",
    description:
      "A modern money transfer experience designed to make sending and managing money simple and easy.",
    
    image: "/projects/paybek/cover.jpg",
    tone: "blue",
    featured: true,
    link: "https://www.behance.net/gallery/204210395/Paybek-Money-transfer",
  },

  {
    number: "02",
    title: "WeDrive",
    category: "Mobility · Taxi · Social Media Design",
    description:
      "A digital ecosystem for drivers and passengers, designed to make everyday mobility simpler.",
    
    image: "/projects/wedrive/cover.jpg",
    tone: "dark",
    featured: true,
  },

  {
    number: "03",
    title: "Bookuz",
    category: "E-commerce · Web · UI/UX Design",
    description:
      "An online book marketplace designed to make discovering and buying books simple and enjoyable.",
    image: "/projects/bookuz/cover.jpg",
    tone: "light",
    featured: true,
    link: "https://www.behance.net/gallery/234324645/Bookuz-Online-book-marketplace",
  },

  {
    number: "04",
    title: "Kids Care Shampoo",
    category: "Branding · Packaging · Graphic Design",
    description:
      "A playful and colorful visual identity and packaging design for a kids care shampoo brand.",
    
    image: "/projects/kids-care-shampoo/cover.jpg",
    tone: "warm",
    featured: true,
    link: "https://www.behance.net/gallery/203692185/Kids-care-shampoo",
  },
];