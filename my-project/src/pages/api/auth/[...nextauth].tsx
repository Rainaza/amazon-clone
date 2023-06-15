import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!==undefined?process.env.NEXT_PUBLIC_GOOGLE_ID:"",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!==undefined?process.env.NEXT_PUBLIC_GOOGLE_SECRET:"",
      authorization: {
        url: "http://localhost:3000/api/auth/callback/google",
        params: { scope: "email" }
      }
       
      
      
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)