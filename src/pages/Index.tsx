import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import KeywordCard from "@/components/KeywordCard";
import profileImage from "@/assets/profile-image.jpg";

const Index = () => {
  const keywords = [
    {
      title: "Frontend Development",
      content: "Passionate about creating beautiful, responsive user interfaces using modern technologies like React, TypeScript, and Tailwind CSS. I focus on performance optimization and user experience."
    },
    {
      title: "UI/UX Design",
      content: "Believer in user-centered design principles. I create intuitive interfaces that solve real problems while maintaining aesthetic appeal and accessibility standards."
    },
    {
      title: "Problem Solving",
      content: "Analytical thinker who enjoys breaking down complex challenges into manageable solutions. I approach problems systematically and value clean, maintainable code."
    },
    {
      title: "Continuous Learning",
      content: "Technology evolves rapidly, and I'm committed to staying current with industry trends, best practices, and emerging tools that can improve development workflows."
    }
  ];

  const contacts = [
    { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
    { icon: Github, label: "GitHub", value: "github.com/username", href: "https://github.com/username" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/in/username" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-[0_15px_35px_hsl(var(--shadow-strong))] transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Introduction and Keywords */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
                  Hi, I'm <span className="text-primary">Alex</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A passionate developer and designer creating meaningful digital experiences
                </p>
              </div>
              
              {/* Keywords in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {keywords.map((keyword, index) => (
                  <KeywordCard 
                    key={keyword.title}
                    title={keyword.title}
                    content={keyword.content}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-surface-elevated rounded-2xl p-6 shadow-[0_15px_35px_hsl(var(--shadow-soft))]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
                <div className="flex flex-wrap gap-4">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-2 p-3 rounded-xl bg-surface-subtle hover:bg-accent transition-colors group"
                    >
                      <contact.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-xs text-muted-foreground">{contact.label}</p>
                        <p className="text-sm text-foreground font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <Button asChild size="lg" className="rounded-full group flex-shrink-0">
                <Link to="/blog" className="flex items-center gap-2">
                  Read My Blog
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
