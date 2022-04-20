import { token } from "./User";
import { fetchTimeOut } from "./_FetchUtils";
let temp;
token.subscribe(v=>temp=v)

export const index = async (url, token=temp) => {
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    };

    const res = await fetchTimeOut(url, options);
    return res
}

export const create = async (url, imp, token=temp) => {
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

export const destory = async (url, id, token=temp) => {
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

export const update = async (url, id, imp, token=temp) => {
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