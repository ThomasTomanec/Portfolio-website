import NextAuth from "next-auth"
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserByEmail, getUserById } from "./data/user"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({

    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            });
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (!user || !user.id || account?.provider !== "credentials") return true;
            const existingUser = await getUserById(user.id);
            if (!existingUser?.emailVerified) return false;
            return true;
        },
        async session({ token, session }) {
            // Předáme roli z tokenu do session
            if (token.role) {
                session.user.role = token.role;  // Role už je v tokenu
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            token.role = existingUser.role;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});
