import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Repositories from "@/components/repositories/Repositories-cards";
import BlogsSection from "@/components/blogs-section";
import {db} from "@/lib/db";

interface Props {
  searchParams: { customUsername?: string };
}


  export default async function ProjectsPage({ searchParams: { customUsername } }: Props): Promise<JSX.Element> {
      const blogs = await db.blog.findMany();
    return (
      <body>
        <header>
          <Navbar />
        </header>
        <main className="mainSite flex min-h-screen flex-col bg-midnight-black">
          <div className="components py-4">
            <div className="componentHeroSections col-span-1 ms:py-10 lg:pt-10 pt-5">
              <HeroSection />
            </div>
            <div className="componentExperiences col-span-1 md:py-10 pt-10 lg:p-xl">
              <Experiences />
            </div>
              <div className="bg-white w-full pb-10">
                  <BlogsSection blogs={blogs}/>
              </div>
            <Repositories />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    );
  }
  