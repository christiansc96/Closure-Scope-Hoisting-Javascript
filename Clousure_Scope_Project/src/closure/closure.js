//Sin closure
const moneyBox = (coins) => {
    var saveCoins = 0;

    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


const moneyBox2 = () => {
    var saveCoins = 0;

    const counter = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return counter;
};

let myMoneyBox = moneyBox2();
myMoneyBox(5);
myMoneyBox(6);