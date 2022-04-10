import {writable, get} from "svelte/store"

export const ingredients = writable(
    [{
        id: 1,
        name: 'Milk',
        unit: 'L',
        amount: 1,
        price: 1000,
        store: 'Costco'
    }, 
    {
        id: 2,
        name: 'Soy Milk',
        unit: 'L',
        amount: 1,
        price: 1000,
        store: 'Costco'
    }]);

export const getIngredientById = (id) => {
    const res = get(ingredients).find(ingredient => ingredient.id == id);
    return res;
}