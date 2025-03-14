export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Join our waitlist to be among the first to access our platform when we launch. We'll notify you as soon as you're granted access.",
    },
    {
      number: 2,
      title: "Customize",
      description: "Once you're in, set up your workspace with our intuitive onboarding process. Tailor the platform to your specific needs and workflow.",
    },
    {
      number: 3,
      title: "Transform",
      description: "Experience the full power of our platform and see immediate improvements in your productivity and collaboration with your team.",
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Our streamlined process makes it easy to get started and see results quickly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/10 -z-10 transform -translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
