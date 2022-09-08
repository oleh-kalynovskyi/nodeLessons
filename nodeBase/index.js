import express from 'express';
import mongoose from  'mongoose' // for work with DB
import bodyParser from 'body-parser';
import router from './router.js';
import fileUpload from 'express-fileupload';
import { DB_URL_AUTH } from './config.js';

const PORT = 8000; // порт на якому піде запуск
const DB_URL = DB_URL_AUTH

const app = express(); // виклик ф-ції
// express не може читати json то для перетворення в json 
// використовують 
// app.use(express.json)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', router)

app.use(fileUpload({}))

// app.get('/', (req, res) => {
// 	res.status(200).json('works')
// })

async function startApp() {
	try {
		// connect to DB
		await	mongoose.connect(DB_URL)
		// call function express create exempliar of project 
		// insede function listern pass (PORT, some function)
		app.listen(PORT, () => console.log('server start', PORT));
	} catch (error) {
		console.log(error);
	}
}

startApp()
