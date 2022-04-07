import {writable} from "svelte/store"

export const token = writable("token");
export const user = writable({email:"", id:""});