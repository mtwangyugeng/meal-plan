import {writable, get} from "svelte/store"

// key: id of ingredient
export const ingredients = writable(
    {
        1:{
            id: 1,
            name: 'Milk',
            unit: 'L',
            amount: 1,
            price: 1000,
            store: 'Costco'
        }, 
        2: {
            id: 2,
            name: 'Soy Milk',
            unit: 'L',
            amount: 1,
            price: 1000,
            store: 'Costco'
        }
    }
    );

// export const getIngredientById = (id) => {
//     const res = get(ingredients).find(ingredient => ingredient.id == id);
//     return res;
// }