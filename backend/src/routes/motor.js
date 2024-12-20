import express from "express";

import motorController from "../controllers/motor.js";

const router = express.Router();

router.get('/rpm', motorController.getRPM);
router.put("/rpm", (req, res) => {
    console.log('req', req);
    res.send("Motor rpm updated");
});

export default router;