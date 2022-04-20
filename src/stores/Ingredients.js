import {writable, get} from "svelte/store"
import { token } from "./User";

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
        console.log(resJson)
        ingredients.update(prev => {
            const neo = {...prev}
            neo[resJson.id] = resJson
            return neo
        })
    }
    return res.status
}

// postIngredient()