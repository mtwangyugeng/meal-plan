import {writable} from "svelte/store"
    
export const TABS = ["Ingredients", "Recipes"]
export const currTab = writable("Ingredients")

export const handleClickTab = (/** @type {string} */ name) => {
    currTab.set(name)
}