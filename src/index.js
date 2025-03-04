const greet = function() {
    return 'Hello World!';
};

const greet = () => {
    return 'Hello World!';
}

const greet = () => 'Hello World!';

function calculateOrderCost(order) {
    return order.quantity * order.priceEa;
}
const calculateOrderCost = order => order.quantity * order.priceEa;

function doSomethingWithNumber(number, callbackFunction) {
    return callbackFunction(number);
}
funtion divideByTwo(num) {
    return num / 2;
}
function multiplyByTwo(num) {
    return num * 2;
}
function triple(num) {
    return num * 3;
}

doSomethingWithNumber(10, divideByTwo);
doSomethingWithNumber(10, multiplyByTwo);
doSomethingWithNumber(10, triple);