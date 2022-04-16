import { Router } from 'express';
import HomeController from '../controllers/HomeController';
import ProviderController from '../controllers/provider/ProviderController';

const router = Router();
const providerController = new ProviderController();
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false,
 }));


router.post('/provider/login', providerController.login);
router.post('/provider/create', providerController.create);

export default router;