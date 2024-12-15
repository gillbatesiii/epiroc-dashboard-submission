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
    transition: all 250ms ease;
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

                <Needle x1="100" y1="100" x2="100" y2="20" angle={angle} />

                {/* Major Markings */}
                <text x="40" y="160" fontSize="12">
                    0
                </text>
                <text x="20" y="118" fontSize="12">
                    100
                </text>
                <text x="23" y="74" fontSize="12">
                    200
                </text>
                <text x="40" y="30" fontSize="12">
                    300
                </text>
                <text x="140" y="60" fontSize="12">
                    400
                </text>
                <text x="180" y="130" fontSize="12">
                    600
                </text>
                <text x="100" y="180" fontSize="12">
                    800
                </text>

                {/* Minor Markings */}
                {/* Add more lines or text elements for minor markings as needed */}
            </Gauge>
        </GaugeContainer>
    );
};

export default Tachometer;