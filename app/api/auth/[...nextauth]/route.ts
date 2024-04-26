import User from "@/models/UserModel";
import { connect } from "@/utils/config/dbConfig";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcryptjs from 'bcryptjs'
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                }
                try {
                    await connect()
                    const user = await User.findOne({ email })
                    if (!user) {
                        return NextResponse.json({ error: "user doesn't exist" }, { status: 400 })
                    }
                    const validPassword = await bcryptjs.compare(password, password)
                    if (!validPassword) {
                        return NextResponse.json({ error: "Invalid password" }, { status: 400 })
                    }
                    return user
                } catch (error) {
                    console.error(error)
                }
            }
        })

    ],
    session:{
        strategy:'jwt'
    },
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.email = user.email;
                token.name = user.name;
            }
            return token
        },

        async session({session, token}:{session:any; token:any}){
            if(session.user){
                session.user.email = token.email
                session.user.name = token.name
            }
            console.log(session)
            return session
        }
    },
    secret: process.env.AUTH_SECRET,
    pages:{
        signIn:'/login'
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };