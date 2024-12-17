import React from "react";
import styled from "styled-components";

const GaugeContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
`;

const Gauge = styled.svg`
    width: 100%;
    height: 100%;
`;

const Needle = styled.line`
    stroke: red;
    stroke-width: 2;
    transform-origin: 50% 50%;
    transform: ${({ angle }) => `rotate(${angle}deg)`};
    transition: all 250ms ease-in-out;
`;

const Tachometer = ({ minValue, maxValue, value }) => {
    const calculateAngle = (min, max, val) => {
        const range = max - min;
        const normalizedValue = val - min;
        return (normalizedValue / range) * 270 - 135;
    };

    const angle = calculateAngle(minValue, maxValue, value);

    return (
        <GaugeContainer>
            <Gauge viewBox="0 0 200 200">
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="black"
                    strokeWidth="5"
                />

                <Needle x1="100" y1="100" x2="100" y2="30" angle={angle}/>

                {/* Major Markings */}
                <text x="36.36038969321073" y="163.63961030678928" fontSize="12">
                    0
                </text>
                <text x="15" y="118" fontSize="12">
                    100
                </text>
                <text x="23" y="74" fontSize="12">
                    200
                </text>
                <text x="47" y="41" fontSize="12">
                    300
                </text>
                <text x="100" y="22" fontSize="12" textAnchor="middle">
                    400
                </text>
                <text x="134" y="41" fontSize="12">
                    500
                </text>
                <text x="159" y="74" fontSize="12">
                    600
                </text>
                <text x="164" y="118" fontSize="12">
                    700
                </text>
                <text x="142" y="163.63961030678928" fontSize="12">
                    800
                </text>
                <text x="50%" y="70%" textAnchor="middle" fontSize="16">
                    {value}
                    <tspan fontSize={8}>RPM</tspan>
                </text>

                {/* Minor Markings */}
                {/* Add more lines or text elements for minor markings as needed */}
            </Gauge>
        </GaugeContainer>
    );
};

export default Tachometer;
