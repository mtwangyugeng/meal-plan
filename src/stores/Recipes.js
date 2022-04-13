import {writable} from "svelte/store";



export const recipes = writable({
    1: {
        id: 1,
        name: "Milk Shake"
    },
    2: {
        id: 2,
        name: "Cake"
    },
})
export const currRecipe = writable(1);

// {recipe_id: {ingredient_id: {amount}}}
export const recipeIngredients = writable([]);
export async function getRecipeIngredients_byID(id) {
    const mock = {1:{1:{amount:0.2}, 2:{amount: 0.3}}, 2:[]}
    recipeIngredients.set(mock[id])
};

export const recipeProcedures = writable([]);
export async function getRecipeProcedures_byID(id) {
    const mock = {1:[{content:"Stir the milk"}, {content:"Boild the milk"}], 2:[]}
    recipeProcedures.set(mock[id])
};


currRecipe.subscribe(
    (v) => {
        getRecipeIngredients_byID(v);
        getRecipeProcedures_byID(v);
    }
)
