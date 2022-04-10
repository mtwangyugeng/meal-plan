import {writable, get} from "svelte/store"


// key: ingredient_id
export const listItems = writable({
    1: {
        id: 1,
        ingredient_id: 1,
        amount: 2
    }
});

