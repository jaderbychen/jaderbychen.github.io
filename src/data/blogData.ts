import blogCover1 from "@/assets/blog-cover-1.jpg";
import blogCover2 from "@/assets/blog-cover-2.jpg";
import blogCover3 from "@/assets/blog-cover-3.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "modern-web-development",
    title: "The Future of Modern Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape, from AI integration to serverless architectures.",
    content: `
# The Future of Modern Web Development

Web development has evolved dramatically over the past decade, and we're witnessing unprecedented changes in how we build and deploy applications.

## Key Trends Shaping the Industry

### 1. AI-Powered Development
Artificial intelligence is revolutionizing how we write code, with tools like GitHub Copilot and ChatGPT becoming integral parts of the development workflow.

### 2. Serverless Architecture
The shift towards serverless computing is enabling developers to focus purely on business logic without worrying about infrastructure management.

### 3. Component-Driven Development
Modern frameworks are embracing component-based architectures, making code more reusable and maintainable.

## Looking Ahead

The future of web development lies in creating more efficient, accessible, and user-centric applications. As developers, we must stay adaptable and continue learning.

---

*What are your thoughts on these trends? Share your perspective in the comments below.*
    `,
    coverImage: blogCover1,
    date: "December 15, 2024"
  },
  {
    id: "minimalist-design-principles",
    title: "Minimalist Design Principles for Digital Products",
    excerpt: "Understanding how less can be more in design, and why minimalism creates better user experiences in the digital age.",
    content: `
# Minimalist Design Principles for Digital Products

Minimalism in design isn't just about aesthetics—it's about creating meaningful experiences that resonate with users.

## Core Principles

### 1. Purpose Over Decoration
Every element should serve a specific purpose. If it doesn't add value, remove it.

### 2. White Space as a Design Element
White space isn't empty space—it's a powerful tool that gives content room to breathe and guides user attention.

### 3. Typography Hierarchy
Clear typography hierarchy helps users scan and understand content quickly.

## Benefits of Minimalist Design

- **Improved Performance**: Fewer elements mean faster loading times
- **Better Accessibility**: Cleaner interfaces are easier to navigate
- **Timeless Appeal**: Minimalist designs age better than trend-heavy alternatives

## Implementation Tips

Start with content, then add only the necessary visual elements to support that content.

---

*Minimalism is not about having less. It's about making room for what matters most.*
    `,
    coverImage: blogCover2,
    date: "December 8, 2024"
  },
  {
    id: "productivity-workflows",
    title: "Building Effective Productivity Workflows",
    excerpt: "A deep dive into creating systems and workflows that actually boost productivity rather than becoming another source of overwhelm.",
    content: `
# Building Effective Productivity Workflows

Productivity isn't about doing more—it's about doing the right things efficiently.

## The Foundation: Systems Over Tools

### 1. Start with Principles
Before choosing tools, establish clear principles for how you want to work.

### 2. Map Your Current Process
Understanding your existing workflow is crucial before optimization.

### 3. Identify Bottlenecks
Find where you're losing time and focus on those areas first.

## Essential Workflow Components

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

*What productivity challenges are you facing? Let's discuss solutions that work in the real world.*
    `,
    coverImage: blogCover3,
    date: "November 28, 2024"
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};