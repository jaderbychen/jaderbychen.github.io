import blogCover1 from "@/assets/blog-cover-1.jpg";
import blogCover2 from "@/assets/blog-cover-2.jpg";
import blogCover3 from "@/assets/blog-cover-3.jpg";
import profileImage from "@/assets/profile-image.jpg";
import fiveElementImage from "@/assets/five-element.png";

export interface BlogContentItem {
  type: 'text' | 'image';
  content: string;
  alt?: string;
  caption?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: BlogContentItem[];
  coverImage: string;
  date: string;
  externalLink?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "gensmo-product-analysis",
    title: "Gensmo Product Analysis",
    excerpt: "A comprehensive analysis of Gensmo, your personal AI stylist, exploring its features, market positioning, and user experience design.",
    content: [
      {
        type: 'text',
        content: `# The Future of Modern Web Development

Web development has evolved dramatically over the past decade, and we're witnessing unprecedented changes in how we build and deploy applications.`
      },
      {
        type: 'image',
        content: profileImage,
        alt: 'Modern web development workspace',
        caption: 'The modern developer workspace has evolved significantly'
      },
      {
        type: 'text',
        content: `## Key Trends Shaping the Industry

### 1. AI-Powered Development
Artificial intelligence is revolutionizing how we write code, with tools like GitHub Copilot and ChatGPT becoming integral parts of the development workflow.

### 2. Serverless Architecture
The shift towards serverless computing is enabling developers to focus purely on business logic without worrying about infrastructure management.`
      },
      {
        type: 'image',
        content: blogCover2,
        alt: 'Serverless architecture diagram',
        caption: 'Serverless architecture simplifies deployment and scaling'
      },
      {
        type: 'text',
        content: `### 3. Component-Driven Development
Modern frameworks are embracing component-based architectures, making code more reusable and maintainable.

## Looking Ahead

The future of web development lies in creating more efficient, accessible, and user-centric applications. As developers, we must stay adaptable and continue learning.

---

*What are your thoughts on these trends? Share your perspective in the comments below.*`
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center", // Placeholder for Gensmo image
    date: "December 15, 2024",
    externalLink: "https://stripe-dream-ef1.notion.site/Gensmo-Product-Analysis-260b6dc088a580dc9811d0ff05e715e1"
  },
  {
    id: "introvert-extrovert-decision-making",
    title: "Introvert and Extrovert Decision Making",
    excerpt: "Exploring how different personality types reach decisions through distinct methods, and how understanding these approaches can lead to achieving your dreams.",
    content: [
      {
        type: 'text',
        content: `# Minimalist Design Principles for Digital Products

Minimalism in design isn't just about aesthetics—it's about creating meaningful experiences that resonate with users.`
      },
      {
        type: 'image',
        content: blogCover3,
        alt: 'Minimalist design example',
        caption: 'Clean, purposeful design creates better user experiences'
      },
      {
        type: 'text',
        content: `## Core Principles

### 1. Purpose Over Decoration
Every element should serve a specific purpose. If it doesn't add value, remove it.

### 2. White Space as a Design Element
White space isn't empty space—it's a powerful tool that gives content room to breathe and guides user attention.

### 3. Typography Hierarchy
Clear typography hierarchy helps users scan and understand content quickly.`
      },
      {
        type: 'text',
        content: `## Benefits of Minimalist Design

- **Improved Performance**: Fewer elements mean faster loading times
- **Better Accessibility**: Cleaner interfaces are easier to navigate
- **Timeless Appeal**: Minimalist designs age better than trend-heavy alternatives

## Implementation Tips

Start with content, then add only the necessary visual elements to support that content.

---

*Minimalism is not about having less. It's about making room for what matters most.*`
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center", // Path leading to mountains - decision making leads to dream
    date: "December 8, 2024",
    externalLink: "https://stripe-dream-ef1.notion.site/Introvert-and-extrovert-reach-decision-through-different-methods-261b6dc088a580f5897dc005979415f2"
  },
  {
    id: "What-is-luck",
    title: "What is luck",
    excerpt: "How Five Element Theory taught me about the math of fortune",
    content: [
      {
        type: 'text',
        content: ``
      },
      {
        type: 'image',
        content: fiveElementImage,
        alt: 'Productivity workspace setup',
        caption: 'A well-organized workspace is the foundation of productivity'
      },
      {
        type: 'text',
        content: `## The Foundation: Systems Over Tools

### 1. Start with Principles
Before choosing tools, establish clear principles for how you want to work.

### 2. Map Your Current Process
Understanding your existing workflow is crucial before optimization.

### 3. Identify Bottlenecks
Find where you're losing time and focus on those areas first.`
      },
      {
        type: 'text',
        content: `## Essential Workflow Components

### Capture System
Have a reliable way to capture ideas, tasks, and information as they come to you.

### Processing Routine
Regular times to process and organize captured information.

### Review Cycles
Scheduled reviews to ensure your system stays relevant and effective.

## Common Pitfalls to Avoid

- **Tool Obsession**: Constantly switching tools instead of mastering your current setup
- **Over-Optimization**: Spending more time optimizing than actually working
- **Perfectionism**: Waiting for the perfect system instead of starting with good enough

## The Key to Success

The best productivity system is the one you'll actually use consistently.

---

*What productivity challenges are you facing? Let's discuss solutions that work in the real world.*`
      }
    ],
    coverImage: fiveElementImage,
    date: "November 28, 2024"
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};