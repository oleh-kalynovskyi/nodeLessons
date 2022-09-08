// create model of data
import mongoose from 'mongoose';

// schema of post 
const Post = new mongoose.Schema({
	author: {type: String, required: true},
	title: {type: String, required: true},
	content: {type: String, required: true},
	picture: {type: String },
})

export default mongoose.model('Post', Post)