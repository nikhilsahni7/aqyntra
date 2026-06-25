import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import Export from "@/components/Export";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1 w-full">
        {/* Hero Area */}
        <Hero />

        {/* Value Propositions Features Grid */}
        <Features />

        {/* Story, Vision, Mission, Commitment */}
        <About />

        {/* Sizes, Preforms, and Private Label Catalog */}
        <Products />

        {/* Global Export Section */}
        <Export />

        {/* Decomposition Cycle and Carbon footprints */}
        <Sustainability />

        {/* RFQ and Inquiry Contact Form */}
        <Contact />
      </main>

      {/* Footer Details and Downloads */}
      <Footer />
    </>
  );
}
