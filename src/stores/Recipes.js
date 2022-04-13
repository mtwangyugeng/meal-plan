import {writable} from "svelte/store";



export const recipes = writable({
    1: {
        id: 1,
        name: "Milk Shake",
        ingreidents: [{id:1 , amount: 0.23}],
        procedures: ["Boil some milk."]
    },
    2: {
        id: 2,
        name: "Cake",
        ingreidents: [{id:1 , amount: 0.23}],
        procedures: ["Boil some milk."]
    },
})