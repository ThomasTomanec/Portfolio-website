import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Repositories from "@/components/repositories/Repositories-cards";
import BlogsSection from "@/components/blogs-section";
import ReactGA from "react-ga4";
import {db} from "@/lib/db";

const TRACKING_ID = "G-ZDYYFQJF9N";
ReactGA.initialize(TRACKING_ID);

interface Props {
  searchParams: { customUsername?: string };
}

  export default async function ProjectsPage({ searchParams: { customUsername } }: Props): Promise<JSX.Element> {
      const blogs = await db.blog.findMany();
      ReactGA.send("pageview");

    return (
      <body>
        <header className="relative z-20">
          <Navbar  />
        </header>
        <main className="mainSite relative z-10 mt-[-100px] flex min-h-screen flex-col bg-midnight-black">
          <div className="components">
            <div className="componentHeroSections col-span-1">
              <HeroSection />
            </div>
            <div className="componentExperiences col-span-1 md:py-20 pt-20">
              <Experiences />
            </div>
              <div className="bg-white w-full">
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
