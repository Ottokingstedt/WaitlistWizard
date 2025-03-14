import WaitlistForm from "@/components/forms/WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 lg:pt-20">
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <svg width="678" height="676" viewBox="0 0 678 676" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.0864 188.233C105.464 105.983 229.949 119.599 299.203 109.014C416.691 91.2862 518.799 34.9012 626.883 90.5632C735.549 146.525 711.591 322.848 663.501 429.485C629.635 504.099 557.715 555.772 480.252 596.092C413.478 630.587 342.461 666.529 268.035 661.709C191.068 656.74 130.881 607.099 82.6524 545.415C31.372 479.853 -11.6243 402.677 2.71684 325.787C16.0888 253.473 29.3701 250.048 62.0864 188.233Z" fill="url(#paint0_linear_1_137)"/>
          <defs>
            <linearGradient id="paint0_linear_1_137" x1="675.506" y1="89.0572" x2="61.4045" y2="514.52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Coming Soon &mdash; Join the Waitlist
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 animate-fade-in">
              <span className="block">Transform Your</span>
              <span className="relative">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Workflow Experience
                </span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed animate-slide-up">
              Our revolutionary product helps you streamline your processes, boost productivity, and collaborate seamlessly with your team. Be among the first to experience it.
            </p>
            
            {/* Waitlist Form */}
            <div id="waitlist" className="w-full max-w-md animate-slide-up">
              <WaitlistForm />
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:relative lg:h-full">
            <div className="relative mx-auto max-w-md md:max-w-lg lg:max-w-none">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
                  alt="Product dashboard preview" 
                  className="w-full h-auto object-cover"
                  width="600"
                  height="400"
                />
              </div>
              {/* Floating feature card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-slide-up">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Boost Productivity</h3>
                    <p className="text-sm text-slate-500">Increase efficiency by up to 40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
