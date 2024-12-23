import prisma from "@/lib/db";

export default async function singlePost({ params }) {
	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug,
		},
	});
	console.log(post);
	return (
		<div>
			<h1 className="ml-10 mb-16 text-4xl mt-10">single post</h1>
			<div className="flex justify-center flex-col items-start ml-10 gap-3">
				<p>
					title: <span>{post.title}</span>
				</p>
				<p>
					content: <span>{post.content}</span>
				</p>
				<p>
					published: <span>{post.published}</span>
				</p>
				<p>
					create: <span>{new Date(post.createdAt).toLocaleDateString()}</span>
				</p>
			</div>
		</div>
	);
}
