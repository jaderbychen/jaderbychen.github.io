import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodeCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  delay?: number;
  externalLink?: string;
  technologies: string[];
}

const CodeCard = ({ id, title, description, coverImage, date, delay = 0, externalLink, technologies }: CodeCardProps) => {
  const cardContent = (
    <>
      <div className="aspect-video overflow-hidden rounded-t-2xl">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 3} more
            </Badge>
          )}
        </div>
      </div>
    </>
  );

  return (
    <Card 
      className="group overflow-hidden rounded-2xl border-0 bg-gradient-card shadow-[0_2px_20px_hsl(var(--shadow-soft))] transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--shadow-medium))] hover:scale-[1.02] animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {externalLink ? (
        <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </a>
      ) : (
        <Link to={`/code/${id}`} className="block">
          {cardContent}
        </Link>
      )}
    </Card>
  );
};

export default CodeCard;
