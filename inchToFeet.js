// const myInches = 24;
// const myFeet = myInches / 12;
// console.log(myFeet);


function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaIches = 144;
const dadaFeet = inchToFeet(dadaIches);
console.log(dadaFeet);