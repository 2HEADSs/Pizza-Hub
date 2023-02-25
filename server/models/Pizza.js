const {
    Schema,
    model,
    Types: { ObjectId },
} = require("mongoose");

const URL_PATTERT = /https?:\/\/./i;

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, "Name must be minimum one characters!"],
        maxlength: [15, "Name must be maximum fifteen characters!"],
    },
    type: {
        type: String,
        required: true,
        enum: ["Tasty", "Whole grain", "Vegan", "Gluten free"],
    },
    ingrediants: {
        type: String,
        required: true,
        minlength: [1, "Name must be minimum one characters!"],
        maxlength: [15, "Name must be maximum fifteen characters!"],
    },
    prepTime: {
        type: Number,
        required: true,
        min: [0, "Preparation time should be positive number"],
        max: [60, "This is too much already"],
    },
    cookTime: {
        type: Number,
        required: true,
        min: [0, "Cooking time should be positive number"],
        max: [60, "You are hungry, you don't have eternity"],
    },
});


