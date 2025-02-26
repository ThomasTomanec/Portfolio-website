import BlogPage from "@/app/(protected)/dashboard/blog/page";
import CreateBlog from "@/app/(protected)/dashboard/blog/create-blog/page";
import EditBlog from "@/app/(protected)/dashboard/blog/edit-blog/[id]/page";

/**
 * An array of routes that are accesible to the public
 * these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/page/blog",
    "/auth/new-verification"
];

/** An array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/** The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";