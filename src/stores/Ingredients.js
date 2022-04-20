import {writable, get} from "svelte/store"
import { deleteListItem } from "./ShoppingList";
import { token } from "./User";
let temp;
token.subscribe(v=>temp=v)


// key: id of ingredient
export const ingredients = writable(
    {
        
    }
    );

const url = "/api/ingredients"
export const indexIngredient = async () => {
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${get(token)}`
        },
    };

    const res = await fetch(url, options);
    if (res.status == 200) {
        const resJson = await res.json();
        console.log(resJson)
        const neo = resJson.reduce((res, v)=> {
            res[v.id] = v
            return res
        }, {})
        ingredients.set(neo);
    }
    return res.status;
}

export const createIngredient = async (ingreident) => {
    console.log(get(token))
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${get(token)}`
        },
        body: JSON.stringify(ingreident),
    };
    const res = await fetch(url, options);
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

export const deleteIngredient = async (id, token=temp) => {
    console.log("deleting " + id)
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    };
    const res = await fetch(url + `/${id}`, options);
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

export const updateIngredient = async (id, ingreident, token=temp) => {
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(ingreident),
    };
    const res = await fetch(url + `/${id}`, options);
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