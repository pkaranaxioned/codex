import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
	const files = fs.readdirSync("docs");
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`docs/${slug}.md`, "utf-8");
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}

export default function PostPage({ frontmatter, content }) {
	return (
		<div className="prose mx-auto">
			<p>{frontmatter.category}</p>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.description}</p>
			<p>{frontmatter.tags}</p>
			<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
		</div>
	);
}
