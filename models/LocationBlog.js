var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationBlogSchema = new Schema({
    info: {type: String, required: true},
    pos: {
        longitude: {type: Number, required: true},
        latitude: {type: Number, required: true}
    },
    //Not embedded, this represents a one to many relation with reference on the many side
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    //Verify whether unique works this way
    likedBy: [{type: Schema.Types.ObjectId, unique: true}],
    created: {type: Date, default: Date.now},
    lastUpdated: Date
})

locationBlogSchema.virtual("slug").get(function(){
    return "/locationblog" + this._id;
})

locationBlogSchema.virtual("likedByCount").get(function(){
    return this.likedBy.length;
})

module.exports = mongoose.model("locationBlog",locationBlogSchema)