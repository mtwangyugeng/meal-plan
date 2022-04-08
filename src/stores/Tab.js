import {writable} from "svelte/store";
    
export const TABS = ["Ingredients", "Recipes"];
export const currTab = writable("Ingredients");