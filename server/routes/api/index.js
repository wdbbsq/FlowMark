const express = require('express');
const router = express.Router();
const flowController = require('../../controller/flowController');
const featureController = require('../../controller/featureController');

router.get('/flow', flowController.all);
router.get('/flow/:id', flowController.byId);
router.post('/flow', flowController.create);
router.put('/flow/:id', flowController.update);
router.delete('/flow/:id', flowController.remove);

router.get('/Feature', featureController.all);
router.get('/Feature/:id', featureController.byId);
router.post('/Feature', featureController.create);
router.put('/Feature/:id', featureController.update);
router.delete('/Feature/:id', featureController.remove);

module.exports = router;