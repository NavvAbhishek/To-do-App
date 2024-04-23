import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"

const credentialsConfig = Credentials({
    credentials: {
        email: {
            label:'email'
        },
        password: {
            label:'password',
            type:'password'
        },
      },
     
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [Google],
})