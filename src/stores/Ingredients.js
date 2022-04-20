import {writable, get} from "svelte/store"
import { deleteListItem } from "./ShoppingList";
import { STATUS } from "./_ServerConsts";
import { index, update, create, destory } from "./_Crud"

// key: id of ingredient
export const ingredients = writable({});
const url = "/api/ingredients"



export const indexIngredient = async () => {
    const res = await index(url)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.id] = v
            return res
        }, {})
        ingredients.set(neo);
    }
    return res.status;
}


export const createIngredient = async (ingreident) => {
    const res = await create(url, ingreident);
    if (res.status == 201) {
        const resJson = await res.json();
        ingredients.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}

export const deleteIngredient = async (id) => {
    const res = await destory(url, id)
    if (res.status == 303) {
        ingredients.update(prev => {
            deleteListItem(id)

            const res = {...prev}
            delete res[id];
            return res
        })
    }
    return res.status
}

export const updateIngredient = async (id, ingreident) => {

    const res = await update(url, id, ingreident);
    if (res.status == 202) {
        const resJson = await res.json();
        ingredients.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}