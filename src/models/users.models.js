'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../../constants.js';

// Users Schema
const userSchema = new mongoose.Schema(
    {
        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'USER_ROLE'
        },
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true
        },
        emailId: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            index: true
        },
        bio: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        dob: {
            type: Date,
            required: false
        },
        contactNumber: {
            type: Number,
            required: false,
            minlength: 10,
            maxlength: 10,
            trim: true
        },
        profileImageURL: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        lastLogin: {
            type: Date
        },
        loginCount: {
            type: Number,
            default: 0
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        verificationCode: {
            type: String
        },
        verificationCodeExpiry: {
            type: Date
        },
        forgotPasswordToken: {
            type: String
        },
        forgotPasswordTokenExpiry: {
            type: Date
        },
        refreshToken: {
            type: String,
            required: false
        },
        createdOn: {
            type: Date,
            default: Date.now()
        },
        createdBy: {
            type: String,
            default: 'SYSTEM',
            trim: true
        },
        modifiedOn: {
            type: Date,
            default: Date.now()
        },
        modifiedBy: {
            type: String,
            default: 'SYSTEM',
            trim: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Users Model
const UserModel = mongoose.model('USER', userSchema);

export default UserModel;
