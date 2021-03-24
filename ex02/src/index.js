const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar){
    // Only change code below this line

    const {cylinders, size} = myCar;
    return myCar;

    // Only change code above this line
}

console.log(main(MY_CAR));
module.exports = main;