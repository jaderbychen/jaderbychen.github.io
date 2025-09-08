import fiveElementImage from "@/assets/five-element.png";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  externalLink: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "gensmo-product-analysis",
    title: "Gensmo Product Analysis",
    excerpt: "A comprehensive analysis of Gensmo, your personal AI stylist, exploring its features, market positioning, and user experience design.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    date: "December 15, 2024",
    externalLink: "https://stripe-dream-ef1.notion.site/Gensmo-Product-Analysis-260b6dc088a580dc9811d0ff05e715e1"
  },
  {
    id: "introvert-extrovert-decision-making",
    title: "Introvert and Extrovert Decision Making",
    excerpt: "Exploring how different personality types reach decisions through distinct methods, and how understanding these approaches can lead to achieving your dreams.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    date: "December 8, 2024",
    externalLink: "https://stripe-dream-ef1.notion.site/Networking-for-Introverts-vs-Extroverts-Two-Paths-to-a-Decision-261b6dc088a580f5897dc005979415f2"
  },
  {
    id: "what-is-luck",
    title: "What is Luck",
    excerpt: "How Five Element Theory taught me about the math of fortune and understanding luck through ancient wisdom.",
    coverImage: fiveElementImage,
    date: "November 28, 2024",
    externalLink: "https://stripe-dream-ef1.notion.site/What-is-luck-how-Five-Element-Theory-taught-me-about-the-math-of-fortune-268b6dc088a5807aafc9d014e8e17fff"
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};