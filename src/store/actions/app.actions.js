export const ADD_COFFEE = "ADD_COFFEE";

export const addCoffee = coffeeItem => ({
    type: ADD_COFFEE,
    payload: {
        coffeeItem
    }
});