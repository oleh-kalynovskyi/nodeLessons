import Post from './Post.js';

class PostService {
	async create(post, picture) {
		const createdPost = await Post.create(post)
		return createdPost;
	}
	async getAll() {
		const posts = await Post.find();
		return posts
	}
	async getById(id) {
			if(!id) {
				throw new Error('id did`t find')
			}
			const post = await Post.findById(id);
			return post;
	}
	async update(post) {
			if(!post._id) {
				throw new Error('id did`t find')
			}
			const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
			return updatePost
	}
	async delete(id) {
		if(!id) {
				throw new Error('id did`t find')
		}
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new PostService