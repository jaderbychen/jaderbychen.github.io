import { Mail, Github, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import KeywordCard from "@/components/KeywordCard";
import profileImage from "@/assets/profile-image.jpg";

const Index = () => {
  const keywords = [
    {
      title: "Corporate Efficiency Enthusiast",
      content: [
        "I graduated from the <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Chinese University of Hong Kong</span> with a Bachelor's degree of Engineering in Financial Technology. I joined <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Goldman Sachs</span> as an engineer in Global Banking and Markets Division, where I worked on various projects related to trading systems including building an internal platform to facilitate the trading of ETFs.",
        "During this time, I realized that my true passion lies in <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>corporate efficiency</span> — creating solutions that improve workflows and process for both internal and external stakeholders. To pursue this path, I joined <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Bytedance's Lark division</span> as a senior business analyst, focusing on promoting tools that drive organizational productivity at scale.",
        "In addition, I also worked with an NGO on its digital transformation initiatives, helping boost corporate efficiency through technology adoption."
      ]
    },
    {
      title: "Believer in Non-Zero Sum Game",
      content: [
        "I consider myself a believer in <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>non-zero sum game</span>. While trading system are intellectually challenging and fun at the same time, the nature of the work is fundamentally <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>zero sum</span>. Every gain comes at someone else's loss.",
        "I wanted my work to generate broader, shared value. That conviction drove my decision to pursue roles where I could design solutions that make organizations more efficient, collaborative, and productive. For me, creating tools that help people achieve more or have more fun is the truest form of a non–zero-sum game."
      ]
    },
    {
      title: "Passionate about Stand Up Paddling",
      content: [
        "I've been practicing <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>stand-up paddleboarding</span> for more than six years. Being on the water taught me how to navigate waves, adapt to shifting conditions, and make decisions under uncertain weather. It also forced me to disconnect from my phone and be fully present. These lessons in <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>balance, resilience, and risk navigation</span> continue to shape how I approach challenges in both work and life."
      ]
    },
    {
      title: "Sci‑Fi Fan",
      content: ["I'm a lifelong <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>sci‑fi fan</span> and often draw inspiration from speculative worlds to reflect on the future of humanity and technology. Movies like <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Arrival</span> shaped the way I think about zero‑sum versus non‑zero‑sum games, while <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Ted Chiang's stories</span> challenge me with their philosophical depth and exploration of human values.",
        "My favorite sci‑fi game, <span style='background-color: #dbeafe; padding: 2px 4px; border-radius: 4px;'>Minds Beneath</span>, pushes this further by asking: if human intelligence cannot match artificial intelligence, what if our own brains are used to train it? Technology evolves rapidly, and I'm committed to staying current with industry trends, best practices, and emerging tools that can improve development workflows."
      ]
    }
  ];

  const contacts = [
    { icon: Mail, label: "Email", value: "yu.jade.chen@berkeley.edu", href: "mailto:yu.jade.chen@berkeley.edu" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jaderbychen", href: "https://linkedin.com/in/jaderbychen" },
    { icon: Github, label: "Github", value: "https://github.com/jaderbychen", href: "https://github.com/jaderbychen" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20 lg:ml-20">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Profile Image */}
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
              <div className="relative group">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-[0_20px_50px_hsl(var(--shadow-strong))] transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Keywords Cards */}
            <div className="space-y-4 lg:ml-20 w-full lg:w-auto">
              <div className="mb-8 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Hey there! <span className="text-primary"></span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  I'm Jade Chen, an MBA/MEng student at University of California, Berkeley. Welcome to my home page!
                </p>
              </div>
              
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
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-surface-elevated rounded-3xl p-8 shadow-[0_20px_50px_hsl(var(--shadow-soft))]">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-surface-subtle hover:bg-accent transition-colors group"
                >
                  <contact.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
