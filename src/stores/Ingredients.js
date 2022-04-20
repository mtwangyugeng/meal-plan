import {writable, get} from "svelte/store"
import { deleteListItem } from "./ShoppingList";



// key: id of ingredient
export const ingredients = writable({});
const url = "/api/ingredients"
import { token } from "./User";
import { fetchTimeOut } from "./_FetchUtils";
import { STATUS } from "./_ServerConsts";
let temp;
token.subscribe(v=>temp=v)


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

const index = async (url, token=temp) => {
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    };

    const res = await fetchTimeOut(url, options);
    return res
}

const create = async (url, imp, token=temp) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(imp),
    };
    const res = await fetchTimeOut(url, options);
    return res;
}

const destory = async (url, id, token=temp) => {
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    };
    const res = await fetchTimeOut(url + `/${id}`, options);
    return res;
}

const update = async (url, id, imp, token=temp) => {
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(imp),
    };
    const res = await fetchTimeOut(url + `/${id}`, options);
    return res;
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