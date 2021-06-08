// Code your solution here
function findMatching(drivers, name) {
    let newDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return newDrivers;
}

function fuzzyMatch(drivers, letter) {
    let matchingLetter = drivers.filter(driver => {
        if (driver.slice(0, letter.length) === letter) {
            return driver
        }
    })
    return matchingLetter
}

function matchName(drivers, name) {
    let matchingName = drivers.filter(driver => {
        if (driver.name === name) {
            return driver
        }
    })
    return matchingName;
}