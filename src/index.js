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