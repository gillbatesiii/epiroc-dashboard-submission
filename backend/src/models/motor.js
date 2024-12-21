class MotorModel {
    constructor() {
        this.rpm = 500;
    }

    getRPM() {
        return {rpm: this.rpm};
    }
}

const motorModel = new MotorModel();
export default motorModel;