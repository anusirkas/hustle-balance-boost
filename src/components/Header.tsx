
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-8 h-8 rounded-lg"></div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">
            Healthy Hustle
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">Dashboard</Button>
          <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">Nutrition</Button>
          <Button variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-700">Insights</Button>
          <Button variant="outline" size="sm">Sign In</Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 px-4 py-2 border-t border-slate-200 dark:border-slate-700 animate-accordion-down">
          <nav className="flex flex-col space-y-2 pb-2">
            <Button variant="ghost" className="justify-start hover:bg-slate-100 dark:hover:bg-slate-700">Dashboard</Button>
            <Button variant="ghost" className="justify-start hover:bg-slate-100 dark:hover:bg-slate-700">Nutrition</Button>
            <Button variant="ghost" className="justify-start hover:bg-slate-100 dark:hover:bg-slate-700">Insights</Button>
            <Button variant="outline" className="justify-start">Sign In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
