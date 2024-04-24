import { connect } from '@/utils/config/dbConfig'
import bcryptjs from 'bcryptjs'
import User from '@/models/UserModel';
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(req: NextRequest) {

    try {
        const { username, email, password } = await req.json()
        const userExist = await User.findOne({ email });
        if (userExist) {
            return NextResponse.json({
                message: 'User already exists'
            }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser =  new User({
           username, email, password: hashedPassword
        })
        const savedUser = await newUser.save()
        return NextResponse.json({
            message: "User successfully registerd",
            success: true,
            savedUser
        })
    } catch (error) {
        return NextResponse.json({ message: 'An error occured while registering the user' }, { status: 500 })
    }
}