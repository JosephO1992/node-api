const express = require('express')
const router = express.Router()
const Staff = require('../models/staff')

// Get all
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find()
        res.send(staff);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

// Get one
router.get('/:id', getStaff, async (req, res) => {
        res.send(res.staff);
})

// Add one
router.post('/', async (req, res) => {
    const staff = new Staff({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        salary: req.body.salary
    })
    try{
        const newStaff = await staff.save();
        res.status(201).json(newStaff);
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

// Update one
router.patch('/:id', getStaff, async (req, res) => {
    if(req.body.firstName != null) {
        res.staff.firstName = req.body.firstName
    }
    if(req.body.lastName != null) {
        res.staff.lastName = req.body.lastName
    }
    if(req.body.age != null) {
        res.staff.age = req.body.age
    }
    if(req.body.salary != null) {
        res.staff.salary = req.body.salary
    }
    try {
        const updatedStaff = await res.staff.save()
        res.json(updatedStaff)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})

// Delete one
router.delete('/:id', getStaff, async (req, res) => {
    try {
        await res.staff.remove()
        res.json({message: 'Deleted Staff member'})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getStaff(req, res, next) {
    let staff
    try {
        staff = await Staff.findById(req.params.id)
        if(staff == null) {
            return res.status(404).json({message: "Can't find staff"})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.staff = staff
    next();
}

module.exports = router 