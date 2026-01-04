import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#about",
    label: "About"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#certifications",
    label: "Certifications"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          RK<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </button>)}
          <Button size="sm" asChild className="gap-2">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                {link.label}
              </button>)}
            <Button asChild className="gap-2 w-full mt-2">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 w-full justify-center">
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;