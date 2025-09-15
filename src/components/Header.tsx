import { BookOpen, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold tracking-tight transition-colors hover:text-muted-foreground"
          >
          Jade Chen
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant={location.pathname === "/code" ? "default" : "ghost"}
              size="sm"
              asChild
              className="rounded-full border-b-2 border-gray-200 bg-gray-200 hover:bg-gray-200 text-black"
            >
              <Link to="/code" className="flex items-center gap-1 sm:gap-2 text-black text-xs sm:text-sm">
                <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">Code for Fun</span>
                <span className="sm:hidden">Code</span>
              </Link>
            </Button>
            
            <Button
              variant={location.pathname === "/blog" ? "default" : "ghost"}
              size="sm"
              asChild
              className="rounded-full border-b-2 border-gray-200 bg-gray-200 hover:bg-gray-200 text-black"
            >
              <Link to="/blog" className="flex items-center gap-1 sm:gap-2 text-black text-xs sm:text-sm">
                <BookOpen size={16} className="sm:w-[18px] sm:h-[18px]" />
                Blog
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;