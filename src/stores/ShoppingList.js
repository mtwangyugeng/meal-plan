import {writable} from "svelte/store"

export const listItems = writable([
    {
        id: 1,
        ingredient_id: 1,
        amount: 2
    }
]);