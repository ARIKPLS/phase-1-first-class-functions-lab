// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (num1) => function (fare){return num1 * fare}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, funk) => {
    return funk(arrayOfDrivers)
} 

