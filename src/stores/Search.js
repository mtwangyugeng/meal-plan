import {writable} from "svelte/store"

export const searchRegex = writable(/.*/);

export const makeRegex = (search) => {
    return new RegExp(`(^|\\s)${search}.*`, 'i')
}

export const setSearchRegex = (/** @type {String} */ search) => {
    searchRegex.set(makeRegex(search));
}