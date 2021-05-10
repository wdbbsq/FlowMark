const express = require('express');
const router = express.Router();
const flowController = require('../../controller/flowController');
const featureController = require('../../controller/featureController');
const contentfeatureController = require('../../controller/contentfeatureController');

router.get('/flow', flowController.all);
router.get('/flow/total', flowController.total);
router.get('/flow/:id', flowController.byId);
router.post('/flow', flowController.create);
router.put('/flow/:id', flowController.update);
router.delete('/flow/:id', flowController.remove);

router.get('/feature', featureController.all);
router.get('/feature/:id', featureController.byId);
router.post('/feature', featureController.create);
router.put('/feature/:id', featureController.update);
router.delete('/feature/:id', featureController.remove);

router.get('/contentfeature', contentfeatureController.all);
router.get('/contentfeature/total', contentfeatureController.total);
router.get('/contentfeature/:id', contentfeatureController.byId);
router.post('/contentfeature', contentfeatureController.create);
router.put('/contentfeature/:id', contentfeatureController.update);
router.delete('/contentfeature/:id', contentfeatureController.remove);

module.exports = router;