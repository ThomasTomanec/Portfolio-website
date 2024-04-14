import { auth, signOut } from "@/auth"
const DashBoard = () => {
    return (
        <div>
            newDashboard
            <form action={async () => {
                "use server";

                await signOut();
            }}>
                <button type="submit">
                    Sign out
                </button>
            </form>
        </div>

    );
}
export default DashBoard;