import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
}, { timestamps: true }
);

const User = mongoose.models.users || mongoose.model('users', userSchema)
export default User