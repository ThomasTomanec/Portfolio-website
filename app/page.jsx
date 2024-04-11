import React from "react";
import { Card } from "@/components/repositories/card";
import { Article } from "@/components/repositories/article";
import data from "@/data.json";
import { getRepos, getPinnedRepos, getVercelProjects } from "./data";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer"

export default async function ProjectsPage({
    searchParams: { customUsername },
}) {

    const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
    const [
        repositories,
        pinnedNames,
        vercelProjects
    ] = await Promise.all([
        getRepos(username),
        getPinnedRepos(username),
        getVercelProjects()
    ]);
    // interested only in the project name, link, framework and description
    // interested only in Vercel projects that are linked to GitHub repositories
    const vercelProjectsDetails = vercelProjects.projects
        .filter(project => {
            const githubRepo = repositories.find(repo => repo.name === project.name);
            return githubRepo;
        })
        .map((project) => ({
            framework: project.framework,
            name: project.name,
            nodeVersion: project.nodeVersion,
            link: project.link,
            description: project.description,
            language: project.language

        }));
        

    // For Vercel projects, add the framework to the GitHub repository info object.
    repositories.forEach(repo => {
        const vercelRepo = vercelProjectsDetails.find(vercelRepo => vercelRepo.name === repo.name);
        if (vercelRepo) {
            repo.vercel = vercelRepo;
        }
        
    });

    // const heroes = repositories.filter((project) => data.projects.heroNames.includes(project.name)).sort((a, b) => b.stargazers_count - a.stargazers_count);
    const heroes = repositories.filter((project) => pinnedNames.includes(project.name)).sort((a, b) => b.stargazers_count - a.stargazers_count);
    const sorted = repositories
    
        .filter((p) => !p.private)
        .filter((p) => !p.fork)
        .filter((p) => !p.archived)
        // .filter((p) => p.name !== username)
        .filter((p) => !pinnedNames.includes(p.name))
        .filter((p) => !data.projects.blacklist.includes(p.name))
        .sort(
            (a, b) =>
                new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime(),
                
        );

    const chunkSize = Math.ceil(sorted.length / 3);
    return (

        <main className="mainSite flex min-h-screen flex-col bg-stone-950 container mx-auto px-24 pt-6">
            <Navbar />
            <span className="w-full p-0.2 top-4 relative bg-gray-700"></span>
            {/* grid grid-rows-3 */}
            <div className="components container mx-auto py-4">
                <div className="componentHeroSections col-span-1 ms:py-10 lg:pt-10">
                    <HeroSection />
                </div>
                <div className="componentExperiences col-span-1 md:py-10 lg:p-xl">
                    <Experiences />
                </div>
                <div className="componentPinnedItem col-span-1 md:col-span-1 md:py-10 items-center">
                    <div className="flex justify-center mt-8">
                        <div className="mt-8">
                            <h2 className="text-4xl text-center pb-7 font-bold 2xl:text-left text-white">My GitHub Projects</h2>
                            <div className="px-6  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-12">

                                {
                                    heroes.length ? <>
                                        <div className="w-full h-px bg-zinc-800" />
                                        <div className="grid grid-cols-1 gap-4 mx-auto lg:grid-cols-2 ">
                                            {(heroes[0] || heroes[2]) ?
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[heroes[0], heroes[2]].map((project) => (
                                                        !project ? null :
                                                            <div key={project.name} className="w-full h-full">
                                                                <Card>
                                                                    <Article project={project} />
                                                                </Card>
                                                            </div>
                                                    ))}
                                                </div> : null
                                            }
                                            {(heroes[1] || heroes[3]) ?
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[heroes[1], heroes[3]].map((project) => (
                                                        !project ? null :
                                                            <div key={project.name} className="w-full h-full">
                                                                <Card>
                                                                    <Article project={project} />
                                                                </Card>
                                                            </div>
                                                    ))}
                                                </div> : null
                                            }
                                        </div>

                                        <div className="hidden w-full h-px md:block bg-zinc-800" />
                                    </> : null
                                }
                            </div>
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        </main>



    );
}