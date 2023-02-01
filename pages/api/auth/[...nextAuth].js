import NextAuth from "next-auth"
import TwiterProvider from "next-auth/providers/twitter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    TwiterProvide({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version:"2.0"
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)