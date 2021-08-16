"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AnimalSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: false,
    },
    photo_url: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users',
        required: false,
    },
});
exports.default = mongoose_1.model('animal', AnimalSchema);
