import {writable} from "svelte/store"

export const searchRegex = writable(/.*/);

export const setSearchRegex = (/** @type {String} */ search) => {
    searchRegex.set(new RegExp(`(^|\\s)${search}.*`, 'i'));
}