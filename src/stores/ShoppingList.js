import {writable, get} from "svelte/store"
import { index, update, create, destory } from "./_Crud";
import { STATUS } from "./_ServerConsts";


// key: ingredient_id
export const listItems = writable({
    // 1: {
    //     id: 1,
    //     ingredient_id: 1,
    //     amount: 2
    // }
});
const url = "/api/list_items"

export const indexListItems = async () => {
    const res = await index(url)
    if (res.status == STATUS.READED) {
        const resJson = await res.json();
        const neo = resJson.reduce((res, v)=> {
            res[v.ingredient_id] = v
            return res
        }, {})
        listItems.set(neo);
    }
    return res.status;
}

let id = 2;
export const addListItem = async (ingredient_id, amount=1) => {
    const neo = get(listItems)
    if (neo[ingredient_id]) {
        neo[ingredient_id]["amount"] += amount;
        const res = await update(url, neo[ingredient_id]["id"], neo[ingredient_id]);
        if (res.status == STATUS.UPDATED) {
            listItems.set(neo);
        }
        return res.status;
    }else {
        const newValue = {
            id: id++,
            ingredient_id: ingredient_id,
            amount: amount
        }
        
        const res = await create(url, newValue);
        if (res.status == STATUS.CREATED) {
            const resJson = await res.json();
            neo[ingredient_id] = resJson;
            listItems.set(neo);
        }
        return res.status;
    }
}

export const removeListItem = async (ingredient_id, amount=1) => {
    const neo = get(listItems)
    console.log(neo[ingredient_id])
    if (neo[ingredient_id]["amount"] - amount <= 0) {
        const res = await destory(url, neo[ingredient_id]["id"]);
        if (res.status == STATUS.DELETED) {
            delete neo[ingredient_id];
            listItems.set(neo);
        }
        return res.status;
    }else {
        neo[ingredient_id]["amount"] -= amount;
        const res = await update(url, neo[ingredient_id]["id"], neo[ingredient_id]);
        if (res.status == STATUS.UPDATED) {
            listItems.set(neo);
        }
        return res.status;
    }
}

export const deleteListItem = (ingredient_id) => {
    const neo = get(listItems)
    delete neo[ingredient_id];
    listItems.set(neo);
}