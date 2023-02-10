import express from 'express';
import multer from 'multer';
import { isAdmin, isAuth } from '../utils.js';
import { postUpload } from '../controllers/uploadController.js';

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, isAdmin, upload.single('file'), postUpload);
export default uploadRouter;
