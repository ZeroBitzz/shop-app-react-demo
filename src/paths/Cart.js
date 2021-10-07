//mui imports
import { Button, Typography } from "@material-ui/core";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { decrementPortalGun, decrementSword, removeAll } from "../actions";

const Cart = () => {
    const portalGunCount = useSelector(state => state.itemCounter.portalGunCount)
    const swordCount = useSelector(state => state.itemCounter.swordCount)
    const dispatch = useDispatch();


    return (
        <div>
            <Typography variant='h1' id='pCount'>Your Cart</Typography>
            <Typography variant='h4' id='pCount'>Portal Guns: {portalGunCount}<Button variant='contained' color='primary' onClick={() => dispatch(decrementPortalGun())}>Remove Portal Gun</Button></Typography>
            <Typography variant='h4' id='pCount'>Portal Guns: {swordCount}<Button variant='contained' color='primary' onClick={() => dispatch(decrementSword())}>Remove Sword</Button></Typography>
            <Button variant='contained' color='secondary' onClick={() => dispatch(removeAll())}>REMOVE ALL</Button>
        </div>
    )
}

export default Cart;