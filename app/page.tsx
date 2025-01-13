import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Repositories from "@/components/repositories/Repositories-cards";
import BlogsSection from "@/components/blogs-section";
import ReactGA from "react-ga4";
import {db} from "@/lib/db";
import { GoogleAnalytics } from '@next/third-parties/google'


ReactGA.initialize("G-ZDYYFQJF9N");
ReactGA.send("pageview");

interface Props {
  searchParams: { customUsername?: string };
}

  export default async function ProjectsPage({ searchParams: { customUsername } }: Props): Promise<JSX.Element> {
      const blogs = await db.blog.findMany();
      ReactGA.initialize("G-ZDYYFQJF9N");
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
              <GoogleAnalytics gaId="G-ZDYYFQJF9N" />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    );
  }
