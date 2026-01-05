import { Github } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Rakesh Kushwaha. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:arjun.verma.ce@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              
            </a>
            <a href="https://linkedin.com/in/arjun-verma-ce" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built </span>
            
            <span>by Anupam Tiwari </span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
