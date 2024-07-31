module.exports = function toReadable(number) {
    const arr = number.toString().split('');
    const readableNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const readableDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return readableNums[number];
    } else if (number < 100) {
        return number % 10 === 0 ? readableDozens[arr[0] - 2] : readableDozens[arr[0] - 2] + " " + readableNums[arr[1]];
    }
    else if (number >= 100 && number < 1000) {
        if (number === 100) return 'one hundred';
        return number % 100 === 0 ? readableNums[arr[0]] + ' hundred' : readableNums[arr[0]] + ' hundred ' + toReadable(+arr.slice(1).join(''));
    }
}
