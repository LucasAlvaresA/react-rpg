import styled from "styled-components";

export const Container = styled.div<{size: number, left: number, top: number, sidePosition: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePosition}px;
`;

export const NameBox = styled.div`
    background-color: transparent;
    color: red;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;

    animation: name-animation 5s infinite;
    @keyframes name-animation {
        0% {
            opacity: 1;
            color: blue;
        }
        25% {
            opacity: 0.8;
            color: red;
        }
        50% {
            opacity: 1;
            color: blue;
        }
        75% {
            opacity: 0.8;
            color: red;
        }
        100% {
            opacity: 1;
            color: blue;
        }
    }
`;