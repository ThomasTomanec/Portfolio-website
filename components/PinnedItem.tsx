import { FaSquareGithub } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";
import { LuGitFork } from "react-icons/lu";



export default function PinnedItem({
	title,
	description,
	repoLink,
	language,
	languageName,
	forks,
	stars,
}: {
	title: string;
	description: string;
	repoLink: string;
	language: JSX.Element | null;
	languageName: string;
	forks: number;
	stars: number;
}) {
	return (
		<a href={repoLink} target="_blank">
			<div className="flex h-32 w-64 cursor-pointer flex-col justify-between px-4 py-2 transition-all duration-300 bg-stone-950 border border-gray-900 rounded-lg shadow hover:bg-stone-950 dark:bg-stone-950 dark:border-gray-700 dark:hover:bg-black sm:h-48 sm:w-128 sm:py-3">
				<div className="flex items-center ">
					<div className="bg-zinc-900 flex items-center py-1 px-3 rounded-2xl m-1">
						<RiStarSLine className="text-white"/>
						<span className="ml-2 text-white"> {stars}</span>
					</div>
					<div className="bg-zinc-900 flex items-center py-1 px-3 rounded-2xl m-1">
						<LuGitFork className="text-white"/>
						<span className="ml-2 text-white"> {forks}</span>
					</div>
					<div className="bg-zinc-900 flex items-center py-1 px-3 rounded-2xl m-1">
						{language}
						<span className="ml-2 text-white">{languageName}</span>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-left">
						<FaSquareGithub className="text-8xl mr-2 text-white" />
						<div>
							<h5 className="text-2xl font-semibold text-white mt-1 ">
								{title}
							</h5>
							<p className="mb-3 text- font-normal text-gray-300 leading- ">
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}
