import About from "@/components/about";
import Banner from "@/components/banner/banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Sticky Responsive Unique Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section (#home) */}
        <Banner />

        {/* About Section (#about) */}
        <About />

        {/* Skills Section (#skills) */}
        <Skills />

        {/* Projects Section (#projects) */}
        <Projects />

        {/* Contact Section (#contact) */}
        <Contact />
      </main>

      {/* Obsidian Minimalist Footer */}
      <Footer />
    </div>
  );
}
