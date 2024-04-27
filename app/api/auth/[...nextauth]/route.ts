import User from "@/models/UserModel";
import { connect } from "@/utils/config/dbConfig";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
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
                    const validPassword = await bcryptjs.compare(password, user.password)
                    if (!validPassword) {
                        return NextResponse.json({ error: "Invalid password" }, { status: 400 })
                    }
                    return user
                } catch (error) {
                    console.error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })

    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({ user, account }: { user: any; account: any }) {
            if (account.provider === "google") {
                try {
                    const { name, email } = user;
                    await connect();
                    const ifUserExist = await User.findOne({ email });
                    if (ifUserExist) {
                        return user;
                    }
                    const newUser = new User({
                        name: name,
                        email: email,
                    })
                    const res = await newUser.save()
                    if (res.status === 200 || res.status === 201) {
                        console.log(res)
                        return user;
                      }
                } catch (error) {
                    console.error("Error creating user:", error);
                }
            }
            return user
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.name = user.name;
            }
            return token
        },

        async session({ session, token }: { session: any; token: any }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;
            }
            console.log(session)
            return session
        }
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };