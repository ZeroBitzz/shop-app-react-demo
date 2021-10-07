//state object
const items = {
    portalGunCount: 0,
    swordCount: 0,
}

//reducer(itemCounter)
const itemCounter = (state = items, action) => {
    switch(action.type) {

        //portal gun cases
        case 'incrementPortalGun':
            return {...state, portalGunCount: state.portalGunCount + 1}
        case 'decrementPortalGun':
            //if statement creates barrier so you cant go below zero
            if(state.portalGunCount > 0 ){
                return {...state, portalGunCount: state.portalGunCount - 1}
            }else{
                return state;
            }

        //sword cases
        case 'incrementSword':
            return {...state, swordCount: state.swordCount + 1}
        case 'decrementSword':
            //if statement creates barrier so you cant go below zero
            if(state.swordCount > 0){
                return {...state, swordCount: state.swordCount - 1}
            }else{
                return state;
            }
        
        //remove all case
        case 'removeAll':
            return {...state, portalGunCount: 0, swordCount: 0}

        //default case
        default:
            return state;
    }
}

export default itemCounter;