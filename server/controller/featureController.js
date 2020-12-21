const model = require('../model/index');
const { Feature } = model;

const featureController = {
    all(req, res) {
        Feature
        .find({})
        .exec((err, Feature) => res.json(Feature));
    },
    byId(req, res) {
        const idParams = req.params.id;

        Feature
        .find({})
        .findOne({ _id: idParams })
        .exec((err, Feature) => res.json(Feature));
    },
    create(req, res) {
        const requestBody = req.body;
        const newFeature = new Feature(requestBody);
    
        newFeature.save((err, saved) => {
            Feature
            .findOne({ _id: newFeature._id })
            .populate('Feature')
            .exec((err, Feature) => res.json(Feature));
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let updateData = req.body;
    
        Feature
        .updateOne({ _id: idParams }, { ...updateData }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;
    
        Feature
        .findOne({ _id: idParams })
        .remove((err, removed) => res.json(idParams));
    }
}

module.exports = featureController;