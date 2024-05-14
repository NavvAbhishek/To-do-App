import { connect } from '@/utils/config/dbConfig'
import Task from '@/models/TaskModel'
import { useSession } from 'next-auth/react'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log("Received request body:", reqBody);

        const { data: session }: any = useSession();
        const userId = session.user.id

        const { name, date, priority, category } = reqBody
        console.log(reqBody)

        const newTask = new Task({
            userId: userId, // Assign the extracted teacher ID
            name,
            date,
            priority,
            category
        })

        const savedTask = await newTask.save()
        console.log(savedTask)

        return NextResponse.json({
            message: "Task created successfully",
            success: true,
            savedTask
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }
}

