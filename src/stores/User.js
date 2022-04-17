import {writable} from "svelte/store"

export const token = writable("");
export const user = writable({username:"", id:""});

export const postSignup = async (/** @type {{ username: string, password: string }} */ signupJson) => {
    const url = "/api/signup";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupJson),
    };

    const res = await fetch(url, options);
    const resJson = await res.json();
   
    if (res.status == 201) {
        token.set(resJson.token);
        user.set(resJson.user);
    }
    return res.status
}

export const logout = () => {
    token.set("");
    user.set({username:"", id:""});
}


export const postSignin = async (/** @type {{ username: string, password: string }} */ signupJson) => {
    const url = "/api/login";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupJson),
    };

    const res = await fetch(url, options);
    const resJson = await res.json();
   
    if (res.status == 202) {
        token.set(resJson.token)
        user.set(resJson.user);
    }
    return res.status
}
