"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessRequestSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.AccessRequestSchema = new mongoose_1.default.Schema({
    userId: String,
    requestedRole: String,
    status: String
});
