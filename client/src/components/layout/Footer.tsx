import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary to-accent"></div>
              <span className="text-xl font-bold tracking-tight">ProductName</span>
            </div>
            <p className="text-slate-400 mb-4">
              Transforming how teams work together with powerful collaboration tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Product
                </h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-200">Features</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Roadmap</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">About</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Blog</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Careers</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Press</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Compliance</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} ProductName, Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-4 md:mt-0">
            Designed with ❤️ for modern teams
          </p>
        </div>
      </div>
    </footer>
  );
}
