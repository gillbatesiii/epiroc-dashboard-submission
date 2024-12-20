import motorModel from "../models/motor.js";

function getRPM(req, res) {
    res.status(200).json(motorModel.getRPM());
}

export default {
    getRPM,
}