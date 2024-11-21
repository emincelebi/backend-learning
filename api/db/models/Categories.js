const mongoose = require("mongoose")

const schema = mongoose.Schema({
    is_active: { type: Boolean, default: true },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Categories extends mongoose.Model {

}

schema.loadClass(Users);
module.exports = mongoose.model("categories", schema);