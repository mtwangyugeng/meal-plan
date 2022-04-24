import {writable} from "svelte/store";
import { STATUS } from "./_ServerConsts";
import { index, update, create, destory } from "./_Crud"

const urlRecipes = "/api/recipes"
const urlRecipeIngredient = "/api/recipe_ingredients"

export const recipes = writable({
    // 1: {
    //     id: 1,
    //     name: "Milk Shake"
    // },
    // 2: {
    //     id: 2,
    //     name: "Cake"
    // },
})


export const indexRecipe = async () => {
    const res = await index(urlRecipes)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.id] = v
            return res
        }, {})
        recipes.set(neo);
    }
    return res.status;
}


export const createRecipe = async (recipe) => {
    const res = await create(urlRecipes, recipe);
    if (res.status == 201) {
        const resJson = await res.json();
        recipes.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}

export const deleteRecipe = async (id) => {
    const res = await destory(urlRecipes, id)
    if (res.status == 303) {
        recipes.update(prev => {
            const res = {...prev}
            delete res[id];
            return res
        })
    }
    return res.status
}

export const updateRecipe = async (id, recipe) => {
    const res = await update(urlRecipes, id, recipe);
    if (res.status == 202) {
        const resJson = await res.json();
        recipes.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}


export const currRecipe = writable(null);

// {recipe_id: {ingredient_id: {amount}}}
export const recipeIngredients = writable(
                    {
                        // 23:{amount:0.2, ingredient_id:23}, 
                        // 19:{amount: 0.3, ingredient_id:19}
                    }
                    );

export async function getRecipeIngredients_byID(id) {
    const res = await index(urlRecipeIngredient  + `/${id}`)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.ingredient_id] = v
            return res
        }, {})
        recipeIngredients.set(neo);
    }
    return res.status;
};

export async function createRecipeIngredient(recipeIngredient) {
    const res = await create(urlRecipeIngredient, recipeIngredient);
    if (res.status == 201) {
        const resJson = await res.json();
        recipeIngredients.update(prev => {
            const neo = {...prev}
            neo[resJson.ingredient_id] = resJson
            return neo
        })
    }
    return res.status
};


export const recipeProcedures = writable([]);
export async function getRecipeProcedures_byID(id) {
    const mock = {1:[{content:"Stir the milk"}, {content:"Boild the milk"}], 2:[]}
    recipeProcedures.set(mock[id])
};


// currRecipe.subscribe(
//     (v) => {
//         getRecipeIngredients_byID(v);
//         getRecipeProcedures_byID(v);
//     }
// )
