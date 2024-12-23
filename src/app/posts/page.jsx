import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function PostPage() {
	const prisma = new PrismaClient();

	async function testConnection() {
		try {
			// Fetch all posts from the database
			const posts = await prisma.post.findMany();
			return posts;
		} catch (error) {
			console.error("Error fetching posts: ", error);
		} finally {
			await prisma.$disconnect(); // Disconnect Prisma client after fetching
		}
	}

	const posts = await testConnection();
	console.log(posts);

	// const posts = await prisma.post.findMany();

	// console.log(posts);
	return (
		<div>
			<h1>post home page</h1>
			<ul className="mt-10 flex flex-col justify-center items-center">
				{posts.map((post) => (
					<Link key={post.id} href={`posts/${post.slug}`}>
						<p>
							title: <span>{post.title}</span>
						</p>
						<p>
							description: <span>{post.content}</span>
						</p>
					</Link>
				))}
			</ul>
			<div></div>
		</div>
	);
}
