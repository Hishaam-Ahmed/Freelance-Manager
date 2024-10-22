import express from 'express';
import { Freelancer } from '../models/freelancerModel.js';

const router = express.Router();

router.post(('/'), async (req, res) => {
    try {
        if(
            !req.body.name ||
            !req.body.task ||
            !req.body.cost 
        ) {
            return res.status(400).send({message:'Send all required fields'});
        }

        const newFreelancer = {
            name: req.body.name,
            task: req.body.task,
            cost: req.body.cost
        }
        const freelancer = await Freelancer.create(newFreelancer);
        return res.status(201).send(freelancer);

    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
});

router.get(('/'), async (req, res) => {
    try {
        const freelancers = await Freelancer.find({});
        return res.status(200).json(freelancers);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.get(('/:id'), async (req, res) => {
    try {
        const { id } = req.params;
        const freelancer = await Freelancer.findById(id);
        return res.status(200).json({freelancer});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.task ||
            !req.body.cost 
        ) {
            return res.status(400).send({message:'Send all required fields'});
        }

        const { id } = req.params;
        const result = await Freelancer.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({message: 'Freelancer not found'});
        }
        return res.status(200).send({message: 'Freelancer successfully updated'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Freelancer.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({message: 'Freelancer not found'});
        }
        return res.status(200).send({message: 'Freelancer successfully deleted'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;