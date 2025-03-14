import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ProductName - Join the Waitlist for Early Access</title>
        <meta name="description" content="Sign up for early access to our revolutionary product that will transform how you work. Join our waitlist today and be among the first to experience it." />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
