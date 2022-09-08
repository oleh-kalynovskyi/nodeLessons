import PostService from './PostService.js';

class PostController {
	async create(req, res) {
		try {
			console.log(req.files);
			const post = await PostService.create(req.body)
			res.json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async getAll(req, res) {
		try {
			const posts = await PostService.getAll()
			return res.json(posts)
		} catch (error) {
			res.status(500).json('error')
		}
	}
	async getById(req, res) {
		try {
			const post = await PostService.getById(req.params.id)
			return res.json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async update(req, res) {
		try {
			const updatePost = await PostService.update(req.body)
			return updatePost
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async delete(req, res) {
		try {
			const post = await PostService.delete(req.params.id)
			return res.json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new PostController();