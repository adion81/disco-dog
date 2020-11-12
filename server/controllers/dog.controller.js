const {Dog} = require('../models/dog.model');

module.exports = {
    index:(req,res) => {
        Dog.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show: (req,res) => {
        Dog.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Dog.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Dog.findOneAndUpdate({_id:req.params.id},req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Dog.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    }
}