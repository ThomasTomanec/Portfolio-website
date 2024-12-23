import { db } from "@/lib/db";

export const revalidate = 10; // Volitelné: čas pro opětovné generování stránky, pokud potřebujete častější aktualizace dat

type BlogProps = {
    blogs: { id: number; name: string }[]; // Definice typu pro blogy
};

const Dashboard = async () => {
    // Načítání dat přímo v komponentě, protože používáme Server-Side Component
    const blogs = await db.blog.findMany();

    return (
        <>
            <div className="flex items-center justify-center h-screen w-full">
                <div className="w-full">
                    <div className="w-1/4 m-auto rounded-md border p-4 bg-white">
                        <div className="flex-1 flex w-full justify-between">
                            <h1>Hlavní stránka</h1>
                        </div>
                    </div>
                    <div className="mt-8">
                        <ul>
                            {blogs.map((blog) => (
                                <li key={blog.id} className="p-2 border-b">
                                    {blog.id}
                                    {blog.name}
                                    {blog.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
