import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { findUserByEmail, createUser } from "@/lib/actions/userActions";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        console.log("SignIn attempt:", { user, account, profile }); // Debug log
        // const isAllowedToSignIn = true
        if (account?.provider === "github" || account?.provider === "google") {
          //connect to the data base
          //const client = await mongoose.connect(process.env.MONGO_URI)
          const email = profile?.email || user.email;

          if (!email) {
            console.error("No email provided");
            return false;
          }
          //check if the user already exists
          const currentUser = await findUserByEmail(profile.email);
          if (!currentUser) {
            //create a new user
            const newUserData = {
              email: email,
              username: profile?.name || user.name || 'User',
              // Remove username field if it doesn't exist in your schema
            };
            
            console.log('Creating new user:', newUserData);
            await createUser(newUserData);

            user.name = newUserData.name;
          }else {
            console.log('User already exists:', currentUser);
          }
          return true;
        }
      } catch (error) {
        console.error("Error during signIn:", error);
        return false;
      }
    },
  },
  async session({ session, token }) {
    // You can add custom fields to the session here
    try{
    if (session.user?.email) {
      const dbUser = await findUserByEmail(session.user.email);
      if (dbUser) {
        session.user.id = dbUser.id.toString();
        session.user.username = dbUser.username;
      }
    }
    } catch (error) {
        console.error('Session callback error:', error);
      }
    return session;
  },
  debug: true, 
});

export { handler as GET, handler as POST };
