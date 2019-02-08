const mongoose = require("mongoose");
// const jwt = require("jwt-simple");
// const config = require("../config/config");

// Mongoose Schema
const schemaBook = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
            max: 13,
            trim: true,
            unique: true,
        },
        language: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
        },
        owner: {
            type: String,
            required: true,
        },
        isBook: {
            type: Boolean,
            required: true,
        },
        isEbook: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

module.exports = mongoose.model("book", schemaBook);
