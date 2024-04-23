import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "next-auth/jwt"


const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const { email, password } = credentials;
        // perform you login logic
        // find out user from db
         //console.log(credentials)
        if (email !== "john@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  // pages: { // Is Used to redirect to some specific or custom page
  //   signIn: "/auth/signin",
  //   // error: '/auth/error',
  //   // signOut: '/auth/signout'
  // },
  callbacks: {
    jwt: async ({token , user}) => {
      // update token
      token.user = user ? user : {
        id: "1234",
        name: "John Doe",
        email: "john@gmail.com",
        role: "admin"
      }
     
      return token;
    },
    session: async ({session , token }) => {
         //console.log(token)
        if (token) {
            session.user = token.user
        }
        // console.log( "Session callbacks :: ",session)
        // Send properties to the client, like an access_token from a provider.
        return session
      }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);