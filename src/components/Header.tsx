import { BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight transition-colors hover:text-muted-foreground"
          >
            Portfolio
          </Link>
          
          <Button
            variant={location.pathname === "/blog" ? "default" : "ghost"}
            size="sm"
            asChild
            className="rounded-full"
          >
            <Link to="/blog" className="flex items-center gap-2">
              <BookOpen size={18} />
              Blog
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;