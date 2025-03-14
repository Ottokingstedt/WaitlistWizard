import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "When will the product launch?",
      answer: "We're targeting a launch in Q3 2023. Members of our waitlist will receive early access on a rolling basis, with priority given to those who joined earliest."
    },
    {
      question: "Is there a cost to join the waitlist?",
      answer: "No, joining the waitlist is completely free. We'll notify you when you're granted access, and you'll have the option to choose a pricing plan at that time."
    },
    {
      question: "How will pricing work?",
      answer: "We'll offer several flexible pricing tiers to accommodate different team sizes and needs. Waitlist members will receive a special discount on their subscription."
    },
    {
      question: "Will there be a free trial?",
      answer: "Yes, all users will have access to a 14-day free trial with full functionality. Waitlist members will receive an extended 30-day trial period."
    },
    {
      question: "How do I get support?",
      answer: "Our dedicated support team is available via chat and email. Premium plans include priority support with faster response times."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our product and waitlist process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
