import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Profile {
    sub?: string
    name?: string
    email?: string
    image?: string
    avatar_url?: string
  }

  interface Session {
    user: {
      id?:string
    } & DefaultSession["user"]
  }
  interface JWT {
    id?: string | null
    name?: string | null
    email?: string | null
    picture?: string | null
    sub?: string
  }
}
