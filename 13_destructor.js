// Shorthand

const {PI , E , SQRT2} = Math;

// const {readfile} = require('fs');



const Circle = {
    label : 'CircleX',
    radius : 10
}


const CircleArea = ({radius}, {precision = 2} = {}) => {
    return (PI * radius * radius).toFixed(precision) ;
}

console.log(
    CircleArea(Circle)
);