import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KeywordCardProps {
  title: string;
  content: string;
  delay?: number;
}

const KeywordCard = ({ title, content, delay = 0 }: KeywordCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden rounded-xl border-0 bg-gradient-card shadow-[0_2px_15px_hsl(var(--shadow-soft))] transition-all duration-300 hover:shadow-[0_6px_25px_hsl(var(--shadow-medium))] hover:scale-[1.02] h-full"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-foreground leading-tight">{title}</h3>
          <div className="flex-shrink-0 ml-2">
            {isExpanded ? (
              <ChevronDown 
                size={16} 
                className="text-muted-foreground transition-all duration-300 group-hover:text-foreground" 
              />
            ) : (
              <ChevronRight 
                size={16} 
                className="text-muted-foreground transition-all duration-300 group-hover:text-foreground" 
              />
            )}
          </div>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xs text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </Card>
  );
};

export default KeywordCard;