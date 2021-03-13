module.exports = function toReadable(number) {
    if (number) {
        let arrayOfUnits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

        let arrayOfSecondTen = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

        let arrayOfTens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

        let hundreds = Math.floor(number / 100);

        let tens = Math.floor((number - hundreds * 100) / 10);

        let units = number - hundreds * 100 - tens * 10;

        let result = `${hundreds ? arrayOfUnits[hundreds - 1] + " hundred" : ""} `;

        if (tens >= 2) {
            result += `${arrayOfTens[tens - 1]} ${units ? arrayOfUnits[units - 1] : ""}`;
            return result.trim();
        } else if (tens) {
            result += `${units ? arrayOfSecondTen[units - 1] : arrayOfTens[tens - 1]}`;
            return result.trim();
        }
        result += `${units ? arrayOfUnits[units - 1] : ""}`
        return result.trim();
    };

    return "zero";
}
