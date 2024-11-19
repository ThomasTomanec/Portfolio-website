import React from "react";
import {Card} from "@/components/repositories/card";
import { Article } from "@/components/repositories/article";
import data from "@/data.json";
import { getRepos, getPinnedRepos, getVercelProjects } from "./data";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

interface Props {
  searchParams: { customUsername?: string };
}

interface Repository {
    name: string;
    stargazers_count: number;
    private: boolean;
    fork: boolean;
    archived: boolean;
    updated_at?: string;
    vercel?: {
      framework: string;
      name: string;
      nodeVersion: string;
      link: string;
      description: string;
      language: string;
    };
    html_url: string;
    language: string;
    created_at: string;
    forks_count: number;
    description: string;
  }

export default async function ProjectsPage({ searchParams: { customUsername } }: Props): Promise<JSX.Element> {
  const username: string = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
  const [
    repositories,
    pinnedNames,
    vercelProjects
  ]: [Repository[], string[], { projects: any[] }] = await Promise.all([
    getRepos(username),
    getPinnedRepos(username),
    getVercelProjects()
  ]);

  const vercelProjectsDetails: Repository[] = vercelProjects.projects
  .filter((project: any) => repositories.find((repo: Repository) => repo.name === project.name))
  .map((project: any) => ({
    name: project.name,
    stargazers_count: 0,
    private: false,
    fork: false,
    archived: false,
    updated_at: '',
    vercel: {
      framework: project.framework,
      name: project.name,
      nodeVersion: project.nodeVersion,
      link: project.link,
      description: project.description,
      language: project.language
    },
    html_url: '', // add default values for these properties
    language: '', // add default values for these properties
    created_at: '', // add default values for these properties
    forks_count: 0, // add default values for these properties
    description: '' // add default values for these properties
  }));

  repositories.forEach((repo: Repository) => {
    const vercelRepo: Repository | undefined = vercelProjectsDetails.find((vercelRepo: Repository) => vercelRepo.name === repo.name);
    if (vercelRepo) {
      repo.vercel = vercelRepo.vercel;
    }
  });

  const heroes: Repository[] = repositories.filter((project: Repository) => pinnedNames.includes(project.name)).sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count);
  const sorted: Repository[] = repositories
    .filter((p: Repository) => !p.private)
    .filter((p: Repository) => !p.fork)
    .filter((p: Repository) => !p.archived)
    .filter((p: Repository) => !pinnedNames.includes(p.name))
    .sort(
      (a: Repository, b: Repository) =>
        new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime()
    );

  const chunkSize: number = Math.ceil(sorted.length / 3);

  return (
    <body>
      <header>
        <Navbar />
      </header>
    <main className="mainSite flex min-h-screen flex-col bg-midnight-black">
      <div className="components container mx-auto py-4">
        <div className="componentHeroSections col-span-1 ms:py-10 lg:pt-10 pt-5">
          <HeroSection />
        </div>
        <div className="componentExperiences col-span-1 md:py-10 pt-10 lg:p-xl">
          <Experiences />
        </div>
        <div className="componentPinnedItem col-span-1 md:col-span-1 md:py-10 items-center">
          <div className="flex justify-center mt-8">
            <div className="mt-8">
              <h2 className="text-4xl text-center pb-7 font-bold 2xl:text-left text-white">My GitHub Projects</h2>
              <div className="px-6  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-12">
                {heroes.length ? (
                  <>
                    <div className="w-full h-px bg-zinc-800" />
                    <div className="grid md:grid-cols-1 gap-4 mx-auto lg:grid-cols-2 ">
                      {(heroes[0] || heroes[2]) ? (
                        <div className="grid md:grid-cols-1 gap-4">
                          {[heroes[0], heroes[2]].map((project: Repository | null) => (
                            !project ? null :
                              <div key={project.name} className="w-full h-full">
                                <Card>
                                  <Article project={project} />
                                </Card>
                              </div>
                          ))}
                        </div>
                      ) : null}
                      {(heroes[1] || heroes[3]) ? (
                        <div className="grid md:grid-cols-1 gap-4">
                          {[heroes[1], heroes[3]].map((project: Repository | null) => (
                            !project ? null :
                              <div key={project.name} className="w-full h-full">
                                <Card>
                                  <Article project={project} />
                                </Card>
                              </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="hidden w-full h-px md:block bg-zinc-800" />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
    <Footer />
    </footer>
    </body>
    
  );
}
