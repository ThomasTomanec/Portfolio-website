import Link from "next/link";
import { MarkGithubIcon, StarIcon, GitBranchIcon } from '@primer/octicons-react';

interface LanguageCircleProps {
  language: string;
  colors: { [key: string]: string };
}

const LanguageCircle: React.FC<LanguageCircleProps> = ({ language, colors }) => {
  const backgroundColor = colors[language] || "bg-gray-300";
  return <div className={`w-4 h-4 ${backgroundColor} rounded-[100%]`} />;
};

const colors: { [key: string]: string } = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  HTML: "bg-red-500",
  Java: "bg-orange-500",
  Unknown: "bg-gray-300",
};

interface ArticleProps {
  project: {
    homepage?: string;
    html_url: string;
    language: string;
    created_at: string;
    stargazers_count: number;
    forks_count: number;
    name: string;
    description: string;
  };
}

export const Article: React.FC<ArticleProps> = ({ project }) => {
  const appLink = project.homepage ? project.homepage : project.html_url;
  const languageColor = colors[project.language] || colors.Unknown;

  return (
    <article className="p-2 md:p-4 ">
      {appLink && (
        <Link href={appLink} passHref>
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 font-display cursor-pointer">
            <span className="font-semibold text-white bg-clip-text">
              <div className="flex justify-between gap-2 items-center ">
                <span className="text-xs duration-1000 text-zinc-500 drop-shadow-orange">
                  <time dateTime={new Date(project.created_at).toISOString()} title="Created">
                    {new Date(project.created_at).toISOString().substring(0, 10)}
                  </time>
                </span>
                <span className="text-xs text-white flex items-center gap-3 pb-2">
                  <span className="flex" title="Total stars.">
                    <div className="pr-2 pl-2 bg-zinc-900 items-center py-1 px-3 rounded-2xl m-1">
                      <StarIcon className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(project.stargazers_count)}
                    </div>
                    <div className="pr-2 pl-2 bg-zinc-900 items-center py-1 px-3 rounded-2xl m-1">
                      <GitBranchIcon className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(project.forks_count)}
                    </div>
                    <div className="pr-2 pl-2 flex bg-zinc-900 items-center py-1 px-3 rounded-2xl m-1">
                      <LanguageCircle language={project.language || 'Unknown'} colors={colors} />
                      <span className="ml-2">{project.language}</span>
                    </div>
                  </span>
                </span>
              </div>
              {project.name}
              <p className="z-20 font-medium ml-0.5 text-sm duration-1000 text-zinc-500">
                {project.description}
              </p>
              <div className="flex justify-between gap-2 items-center float-right mt-2 border-t-2 border-gray-700 border-opacity-50">
              </div>
            </span>
          </h2>
        </Link>
      )}
    </article>
  );
};
