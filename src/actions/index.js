//PORTAL GUN ACTIONS
export const incrementPortalGun = () => {
    return {
        type: 'incrementPortalGun',
    }
}
export const decrementPortalGun = () => {
    return {
        type: 'decrementPortalGun',
    }
}

//SWORD ACTIONS
export const incrementSword = () => {
    return {
        type: 'incrementSword',
    }
}
export const decrementSword = () => {
    return {
        type: 'decrementSword',
    }
}

//PRICE ACTIONS
export const incrementPriceByNum = (n) => {
    return {
        type: 'incrementPriceByNum',
        payload: n,
    }
}

//REMOVE ALL
export const removeAll = () => {
    return {
        type: 'removeAll',
    }
}