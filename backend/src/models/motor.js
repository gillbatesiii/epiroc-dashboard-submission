class MotorModel {
    constructor() {
        this.rpm = 0;
    }

    getRPM() {
        return {rpm: this.rpm};
    }
}

const motorModel = new MotorModel();
export default motorModel;