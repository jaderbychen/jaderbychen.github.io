import Header from "@/components/Header";
import CodeCard from "@/components/CodeCard";
import { codeProjects } from "@/data/codeData";

const Code = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Code for Fun
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personal projects for fun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codeProjects.map((project, index) => (
            <CodeCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage}
              date={project.date}
              delay={index * 100}
              externalLink={project.externalLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Code;
