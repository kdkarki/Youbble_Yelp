import mongoose from 'mongoose';

// Define mongoose schema & model
export interface IAccessRequest extends mongoose.Document {
    userId: string;
    email: string;
    requestedRole: string;
    status: string;
}

export const AccessRequestSchema = new mongoose.Schema({
    userId: String,
    email: String,
    requestedRole: String,
    status: String
});