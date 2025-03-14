import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 absolute inset-0 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already on our waitlist. Be the first to experience our revolutionary product when we launch.
          </p>
          <Button asChild size="lg" className="font-medium shadow-md">
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
