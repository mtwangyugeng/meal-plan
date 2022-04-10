import {writable, get} from "svelte/store"


// key: ingredient_id
export const listItems = writable({
    1: {
        id: 1,
        ingredient_id: 1,
        amount: 2
    }
});

let id = 2;
export const addListItem = (ingredient_id, amount=1) => {
    const neo = get(listItems)
    if (neo[ingredient_id]) {
        neo[ingredient_id]["amount"] += amount;
        listItems.set(neo);
    }else {
        const newValue = {
            id: id++,
            ingredient_id: ingredient_id,
            amount: amount
        }
        neo[ingredient_id] = newValue;
        console.log(neo)
        listItems.set(neo);
    }
}

export const removeListItem = (ingredient_id, amount=1) => {
    const neo = get(listItems)
    neo[ingredient_id]["amount"] -= amount;
    

    if (neo[ingredient_id]["amount"] == 0) {
        delete neo[ingredient_id];
    }

    listItems.set(neo);
}