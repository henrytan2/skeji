import express, { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = Router();
const homeController = new HomeController();

router.get('/', homeController.get);

export default router;