const billCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCount= billCount(1)
const myOtherCount= billCount(10)

myCount()
myOtherCount()
myCount()
myOtherCount()
myCount()
myOtherCount()