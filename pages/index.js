import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
	const files = fs.readdirSync("docs");

	const docs = files.map((fileName) => {
		const slug = fileName.replace(".md", "");
		const readFile = fs.readFileSync(`docs/${fileName}`, "utf-8");
		const { data: frontmatter } = matter(readFile);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			docs,
		},
	};
}

export default function Home({ docs }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
			{docs.map(({ slug, frontmatter }) => (
				<div
					key={slug}
					className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
				>
					<Link href={`/docs/${slug}`}>
						<a>
							<h1 className="p-4">{frontmatter.title}</h1>
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
								<svg
									className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
									fill="currentColor"
									viewBox="0 0 8 8"
								>
									<circle cx={4} cy={4} r={3} />
								</svg>
								{frontmatter.tags}
							</span>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
