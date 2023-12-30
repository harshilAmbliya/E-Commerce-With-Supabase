import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/prisma"

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      id: "github",
      name: "GitHub",
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      // wellKnown: "https://accounts.github.com/.well-known/openid-configuration",
      // idToken: true,
      authorization: {
        url: "https://github.com/login/oauth/authorize",
        // params: { scope: "read:user user:email" }
        params: { scope: "user,gist,user:email" },
      },

      // token: "https://github.com/login/oauth/access_token",
      // userinfo: {
      //     url: "https://api.github.com/user",
      //     async request({ client, tokens }) {
      //         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      //         const profile = await client.userinfo(tokens.access_token!)

      //         if (!profile.email) {
      //             // If the user does not have a public email, get another via the GitHub API
      //             // See https://docs.github.com/en/rest/users/emails#list-public-email-addresses-for-the-authenticated-user
      //             const res = await fetch("https://api.github.com/user/emails", {
      //                 headers: { Authorization: `token ${tokens.access_token}` },
      //             })

      //             if (res.ok) {
      //                 const emails = await res.json()
      //                 profile.email = (emails.find((e:any) => e.primary) ?? emails[0]).email
      //             }
      //         }

      //         return profile
      //     },
      // },
      // profile(profile) {
      //     return {
      //         id: profile.id.toString(),
      //         name: profile.name ?? profile.login,
      //         email: profile.email,
      //         image: profile.avatar_url,
      //     }
      // },
      // style: { logo: "/github.svg", bg: "#24292f", text: "#fff" },
      // https://github.com/login/oauth/authorize
      // token: {
      //     url: "https://example.com/oauth/token",
      //     params: { some: "param" }
      //   }
      // accessTokenUrl: "https://github.com/login/oauth/access_token",
      // authorization: {
      //     url: "https://github.com/login/oauth/authorize"
      // },
      // profileUrl: "https://api.github.com/user",
      // profile: (profile) => {
      //     return {
      //         id: profile.id,
      //         name: profile.name || profile.login,
      //         email: profile.email,
      //         image: profile.avatar_url
      //     }
      // },
      // allowDangerousEmailAccountLinking:true
    }),
  ],
  secret: process.env.NEXT_SECRET!,
  session: {
    strategy: "jwt",
  },
  debug: true,
  callbacks: {
    async signIn({ user, account, profile }) {
      user.image = profile?.avatar_url
      console.log("Sign in", user, account, profile)
      return true
    },
    async session({ session, user, token }) {
        session.user = token
      return session
    },
    async jwt({ token, profile ,user}) {
      if (profile) {
        token.picture = profile.avatar_url
      }
      if(user){
        token.id = user.id
      }
      return token
    },
  },
}

export default authOptions
