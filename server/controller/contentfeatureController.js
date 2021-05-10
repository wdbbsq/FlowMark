const model = require('../model/index');
const { Contentfeature } = model;

const contentfeatureController = {
    all(req, res) {
        Contentfeature
        .find({})
        .exec((err, Contentfeature) => res.json(Contentfeature));
    },
    total(req, res) {
        Contentfeature
        .estimatedDocumentCount()
        .exec((err, Contentfeature) => res.json(Contentfeature));
    },
    byId(req, res) {
        const idParams = req.params.id;

        Contentfeature
        .find({})
        .findOne({ _id: idParams })
        .exec((err, Contentfeature) => res.json(Contentfeature));
    },
    create(req, res) {
        const requestBody = req.body;
        const newContentfeature = new Contentfeature(requestBody);
    
        newContentfeature.save((err, saved) => {
            Contentfeature
            .findOne({ _id: newContentfeature._id })
            .populate('Contentfeature')
            .exec((err, Contentfeature) => res.json(Contentfeature));
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let updateData = req.body;
    
        Contentfeature
        .updateOne({ _id: idParams }, { ...updateData }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;
    
        Contentfeature
        .findOne({ _id: idParams })
        .remove((err, removed) => res.json(idParams));
    }
}

module.exports = contentfeatureController;