const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/',  controller.main);
/*
router.get('/', controller.map);
router.get('/login', controller.login);
router.get('/join', controller.join);
router.get('/mypage', controller.mypage);
*/
router.get('/main/:type', controller.mainC);

router.post('/join', controller.join);

module.exports = router;