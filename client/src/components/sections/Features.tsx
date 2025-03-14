import { LucideIcon, BarChart3, Users, Shield, Calendar, Sparkles, Layers } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
};

const features: Feature[] = [
  {
    icon: Layers,
    title: "Smart Automation",
    description: "Automate repetitive tasks with our AI-powered workflow engine, saving hours of manual work.",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Connect your team in real-time with powerful collaboration tools designed for the modern workspace.",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive reporting and visualization tools that make data actionable.",
    iconBgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Keep your data safe with enterprise-grade security features, including end-to-end encryption and advanced access controls.",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimize your time with intelligent scheduling that integrates with your existing calendar systems.",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Leverage machine learning to uncover patterns and opportunities that would otherwise remain hidden.",
    iconBgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg text-slate-600">
            Our product combines cutting-edge technology with intuitive design to transform how you work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`rounded-lg w-12 h-12 flex items-center justify-center ${feature.iconBgColor} mb-5`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary/90 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
