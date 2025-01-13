"use server"
import {Prisma} from "@prisma/client";
import {db} from "@/lib/db";
import ChartLine from "@/app/(protected)/_components/ChartLine";

const visitsDataQuery = Prisma.sql`
    SELECT DATE("createDate") as postDate, COUNT(*) as count
    FROM "Blog"
    WHERE DATE("createDate") > CAST((CAST(NOW() as date) - interval '7 days') as date)
    GROUP BY DATE("createDate")
    ORDER BY DATE("createDate");
`;

const countsTotalCount = Prisma.sql`
    SELECT COUNT(*) as countblogs
    FROM "Blog";
`;

const countsMounthCount = Prisma.sql`
    SELECT COUNT(*) as countmounthblogs
    FROM "Blog"
    WHERE DATE("createDate") > CAST((CAST(NOW() as date) - interval '1 month') as date);
`;

const countsYearCount = Prisma.sql`
    SELECT COUNT(*) as countyearblogs
    FROM "Blog"
    WHERE DATE("createDate") > CAST((CAST(NOW() as date) - interval '1 year') as date);
`;

const usersRegistred = Prisma.sql`
    SELECT COUNT(*) as countusers
    FROM "User";
`;

const usersRegistredYear = Prisma.sql`
    SELECT DATE("emailVerified") as registerDate, COUNT(*) as count
    FROM "User"
    WHERE DATE("emailVerified") > CAST((CAST(NOW() as date) - interval '7 days') as date)
    GROUP BY DATE("emailVerified")
    ORDER BY DATE("emailVerified");
`;

const Dashboard = async () => {
    const visitsData = await db.$queryRaw(visitsDataQuery) as {
        postdate: Date,
        count: BigInt,
    }[];

    const mounthUsersData = await db.$queryRaw(usersRegistredYear) as {
        registerMonth: Date,
        countusersdaily: BigInt,
    }[];

    const countsData = await db.$queryRaw(countsTotalCount) as {
        countblogs: BigInt,
    }[];

    const countsYearData = await db.$queryRaw(countsYearCount) as {
        countyearblogs: BigInt,
    }[];

    const countsMounthData = await db.$queryRaw(countsMounthCount) as {
        countmounthblogs: BigInt,
    }[];

    const countsDataUsers = await db.$queryRaw(usersRegistred) as {
        countusers: BigInt,
    }[];

    const totalCount = countsData.length > 0 ? Number(countsData[0].countblogs) : 0;

    const totalMountCount = countsMounthData.length > 0 ? Number(countsMounthData[0].countmounthblogs) : 0;

    const totalYearCount = countsYearData.length > 0 ? Number(countsYearData[0].countyearblogs) : 0;

    const totalusersCount = countsDataUsers.length > 0 ? Number(countsDataUsers[0].countusers) : 0;

    const datablogs = {
        labels: visitsData
            .map(r => r.postdate)
            .map(date => `${date.getDate()}.${date.getMonth() + 1}.`),
        datasets: [
            {
                label: "Count of blogs created",
                data: visitsData.map(r => Number(r.count)),
                borderColor: "rgb(9,104,104)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.1,
            },
        ],
    };

    const datausers = {
        labels: ["Prosinec", "Leden"],
        datasets: [
            {
                label: "Count of users registered per month",
                data: [1,1],
                borderColor: "rgb(9,104,104)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const },
            title: { display: true, text: "Count of users registered per month" },
        },
    };

    return (
        <div className="flex justify-center h-screen w-full bg-gray-100">
            <div className="w-full p-4 bg-white rounded shadow flex flex-col lg:flex-row">
                <div
                    className="BlogsInformation w-[600px] h-[450px] lg:h-auto  shadow-[0px_0px_60px_10px_rgba(0,0,0,0.2)]  p-5 m-2 lg:m-5 rounded-xl bg-white">
                    <ChartLine className="p-5 shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)] border rounded-xl border-gray-400" data={datablogs} options={options}/>
                    <div className="Counts pt-5 flex flex-row justify-between">
                        <div
                            className="CountAllBlogs w-[170px] h-[50px] lg:h-[100px] shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)]  border rounded-xl border-gray-400 flex content-center items-center justify-center">
                            <div className="w-[120px] flex flex-col items-center text-center">
                                <h2 className="text-sm">Total</h2>
                                <p className="text-md"><strong>{totalCount}</strong> Blogs</p>
                            </div>
                        </div>

                        <div
                            className="CountAllBlogs w-[170px] h-[50px] lg:h-[100px] shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)]  border rounded-xl border-gray-400 flex content-center items-center justify-center">
                            <div className="w-[120px] flex flex-col items-center text-center">
                                <h2 className="text-sm">Total this Month</h2>
                                <p className="text-md"><strong>{totalMountCount}</strong> Blogs</p>
                            </div>
                        </div>

                        <div
                            className="CountAllBlogs w-[170px] h-[50px] lg:h-[100px] shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)]  border rounded-xl border-gray-400 flex content-center items-center justify-center">
                            <div className="w-[120px] flex flex-col items-center text-center">
                                <h2 className="text-sm">Total this Year</h2>
                                <p className="text-md"><strong>{totalYearCount}</strong> Blogs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="BlogsInformation w-[600px] h-[450px] lg:h-auto shadow-[0px_0px_60px_10px_rgba(0,0,0,0.2)]  p-5 m-5 rounded-xl bg-white">
                    <ChartLine className="p-5 shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)] border rounded-xl border-gray-400" data={datausers} options={options}/>
                    <div className="Counts pt-5 flex flex-row justify-between">
                    <div
                        className="CountAllBlogs w-[170px] h-[50px] lg:h-[100px] shadow-[0px_0px_60px_10px_rgba(0,0,0,0.1)]  border rounded-xl border-gray-400 flex content-center items-center justify-center">
                        <div className="w-[120px] flex flex-col items-center text-center">
                            <h2 className="text-sm">Total users</h2>
                            <p className="text-md"><strong>{totalusersCount}</strong> Registered</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
