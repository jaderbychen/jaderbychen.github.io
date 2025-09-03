import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  delay?: number;
}

const BlogCard = ({ id, title, excerpt, coverImage, date, delay = 0 }: BlogCardProps) => {
  return (
    <Card 
      className="group overflow-hidden rounded-2xl border-0 bg-gradient-card shadow-[0_2px_20px_hsl(var(--shadow-soft))] transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--shadow-medium))] hover:scale-[1.02] animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </Link>
    </Card>
  );
};

export default BlogCard;