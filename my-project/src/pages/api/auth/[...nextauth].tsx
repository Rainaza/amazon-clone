import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers

  providers: [
  
    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID !== undefined
          ? process.env.GOOGLE_ID
          : "",
      clientSecret:
        process.env.NEXTAUTH_SECRET !== undefined
          ? process.env.NEXTAUTH_SECRET
          : "",
    }),
    
    // ...add more providers here
  ],
  
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
};
export default NextAuth(authOptions);
