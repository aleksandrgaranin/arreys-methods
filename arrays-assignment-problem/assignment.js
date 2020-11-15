let numbers = [1, 2, 5, 7, 8, 4, 7, 4.5, 7.9, 4.5, 3.6, 2.1, 122, 444, -15]
let filtered = numbers.filter((number) => number > 5)
console.log(numbers, filtered)

const mapedArrey = []
numbers.map((number, index) => {
    const numberObj = { index: index, number: number }
    mapedArrey.push(numberObj)
})

console.log(mapedArrey)

const redusedNumbers = numbers.reduce((prevValue, curValue) => { return prevValue * curValue }, 1)

console.log(redusedNumbers)

const minMax1 = []
const findMaxMy = (arr) => {
    const arrey = [...arr]
    minMax1.push(arrey.sort((a, b) => a - b)[0])
    minMax1.push(arrey.sort((a, b) => a - b).reverse()[0])
    console.log(minMax1, arr)
}


const minMax2 = []
const newfindMax = (arr) => {
    const arrey = [...arr]
    minMax2.push(Math.min(...arrey))
    minMax2.push(Math.max(...arrey))
    console.log(`${minMax2}, of Arrey: ${arrey}`)
}


newfindMax(numbers)
findMaxMy(numbers)

const [minMy, maxMy] = minMax2
console.log(minMy, maxMy)

const setArr = new Set(numbers)
console.log(setArr, numbers.length)

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}

console.log(findMax(...numbers));


function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);