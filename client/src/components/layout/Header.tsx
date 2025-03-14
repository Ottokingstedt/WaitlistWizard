import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/90 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary to-accent"></div>
              <span className="text-xl font-bold tracking-tight">ProductName</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" 
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <a href="#features" className="text-base font-medium text-slate-600 hover:text-primary transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="text-base font-medium text-slate-600 hover:text-primary transition-colors duration-200">How it Works</a>
            <a href="#faq" className="text-base font-medium text-slate-600 hover:text-primary transition-colors duration-200">FAQ</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 border-t border-slate-200">
          <a 
            href="#features" 
            className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How it Works
          </a>
          <a 
            href="#faq" 
            className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#waitlist" 
            className="block px-4 py-2 text-base font-medium text-white bg-primary hover:bg-primary/90"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
