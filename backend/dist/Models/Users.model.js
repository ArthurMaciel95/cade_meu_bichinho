"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UsersSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
});
exports.default = mongoose_1.model('users', UsersSchema);
