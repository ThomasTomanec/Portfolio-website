import React from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import PinnedItem from '@/components/PinnedItem';
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer"

interface Colors {
  [key: string]: string;
}

function LanguageCircle({ language, colors }: { language: string; colors: Colors }) {
  const backgroundColor = colors[language] || "bg-gray-300";
  return <div className={`w-4 h-4 ${backgroundColor} rounded-[100%]`} />;
}

// Konstanta pro odkaz na GitHub profil
const githubLink = 'https://github.com/thomastomanec';

export default function Home({ pinnedItems }: { pinnedItems: any[] }) {
  const colors: Colors = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-500",
    HTML: "bg-red-500",
    Java: "bg-orange-500",
  };

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
              <div className="mb-20 grid justify-items-center lg:grid-cols-2 gap-x-6 gap-y-6">
                {pinnedItems.map((item: any) => (
                  <PinnedItem
                    key={item.name}
                    title={item.name}
                    description={item.description}
                    language={item.primaryLanguage ? <LanguageCircle language={item.primaryLanguage.name} colors={colors} /> : null}
                    languageName={item.primaryLanguage ? item.primaryLanguage.name : 'No language specified'}
                    repoLink={item.url}
                    forks={item.forks.totalCount}
                    stars={item.stargazers.totalCount}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "thomastomanec") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  primaryLanguage {
                    name
                  }
                  forks {
                    totalCount
                  }
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const pinnedItems = data.user.pinnedItems.edges.map((edge: any) => edge.node);

  return {
    props: {
      pinnedItems,
      githubLink, // Přidání odkazu na GitHub jako prop
    },
  };
}
