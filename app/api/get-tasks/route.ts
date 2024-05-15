import { NextRequest, NextResponse } from "next/server";
import {connect} from '@/utils/config/dbConfig'
import Task from '@/models/TaskModel'

connect()

export async function GET(req: NextRequest){
    try {
        const taskData = await Task.find({})
        return NextResponse.json({
            message: 'Task data found',
            data: taskData
        })
    } catch (error: any) {
        return NextResponse.json({error: error.messafe},{status: 400})
    }
}