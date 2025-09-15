import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KeywordCardProps {
  title: string;
  content: string[];
  delay?: number;
}

const KeywordCard = ({ title, content, delay = 0 }: KeywordCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden rounded-2xl border-0 bg-gradient-card shadow-[0_2px_20px_hsl(var(--shadow-soft))] transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--shadow-medium))] hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <div className="flex-shrink-0 ml-4">
            {isExpanded ? (
              <ChevronDown 
                size={20} 
                className="text-muted-foreground transition-all duration-300 group-hover:text-foreground" 
              />
            ) : (
              <ChevronRight 
                size={20} 
                className="text-muted-foreground transition-all duration-300 group-hover:text-foreground" 
              />
            )}
          </div>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="text-muted-foreground leading-relaxed space-y-3">
            {content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KeywordCard;