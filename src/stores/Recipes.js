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

// {id: {ingredient_id: {amount}}}
export const recipeIngredients = writable(
                    {
                        // {amount:0.2, ingredient_id:23}, 
                        // {amount: 0.3, ingredient_id:19}
                    }
                    );

export async function getRecipeIngredients_byID(id) {
    const res = await index(urlRecipeIngredient  + `/${id}`)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.id] = v
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
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
};


export const deleteRecipeIngredient = async (id) => {
    const res = await destory(urlRecipeIngredient, id)
    if (res.status == 303) {
        recipeIngredients.update(prev => {
            const res = {...prev}
            delete res[id];
            return res
        })
    }
    return res.status
}

export const updateRecipeIngredient = async (id, imp) => {
    console.log(id)
    const res = await update(urlRecipeIngredient, id, imp);
    if (res.status == 202) {
        const resJson = await res.json();
        recipeIngredients.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}


export const recipeProcedures = writable({});
const urlRecipeProcedures = "/api/recipe_procedures"
export async function getRecipeProcedures_byID(id) {
    const res = await index(urlRecipeProcedures  + `/${id}`)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.id] = v
            return res
        }, {})
        recipeProcedures.set(neo);
    }
    return res.status;
};


export async function createRecipeProcedure(imp) {
    const res = await create(urlRecipeProcedures, imp);
    if (res.status == 201) {
        const resJson = await res.json();
        recipeProcedures.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
};


export const deleteRecipeProcedure = async (id) => {
    const res = await destory(urlRecipeProcedures, id)
    if (res.status == 303) {
        recipeProcedures.update(prev => {
            const res = {...prev}
            delete res[id];
            return res
        })
    }
    return res.status
}

export const updateRecipeProcedure = async (id, imp) => {
    console.log(id)
    const res = await update(urlRecipeProcedures, id, imp);
    if (res.status == 202) {
        const resJson = await res.json();
        recipeProcedures.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}

// currRecipe.subscribe(
//     (v) => {
//         getRecipeIngredients_byID(v);
//         getRecipeProcedures_byID(v);
//     }
// )
