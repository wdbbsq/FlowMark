const model = require('../model/index');
const { Flow } = model;

const flowController = {
    all(req, res) {
        Flow
        .find({})
        .exec((err, Flow) => res.json(Flow));
    },
    byId(req, res) {
        const idParams = req.params.id;

        Flow
        .find({})
        .findOne({ _id: idParams })
        .exec((err, Flow) => res.json(Flow));
    },
    create(req, res) {
        const requestBody = req.body;
        const newFlow = new Flow(requestBody);
    
        newFlow.save((err, saved) => {
            Flow
            .findOne({ _id: newFlow._id })
            .populate('flow')
            .exec((err, Flow) => res.json(Flow));
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let updateData = req.body;
    
        Flow
        .updateOne({ _id: idParams }, { ...updateData }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;
    
        Flow
        .findOne({ _id: idParams })
        .remove((err, removed) => res.json(idParams));
    }
}

module.exports = flowController;