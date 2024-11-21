import { db } from "@/lib/db";
import { Table } from '@/app/(protected)/_components/Table';

type Blog = {
    id: string;
    name: string;
    content: string;
};

const BlogTable = async () => {
    const blogs: Blog[] = await db.blog.findMany();

    const data = blogs.map((blog: Blog) => ({
        id: blog.id,
        name: blog.name,
        text: blog.content,
    }));

    const columns = [
        { accessorKey: 'id', header: 'ID' },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'text', header: 'Text' },
    ];

    return <Table data={data} columns={columns} />;
};

export default BlogTable;
