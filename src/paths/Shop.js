//mui imports
import { Button, Typography } from "@material-ui/core";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { incrementPortalGun, incrementSword } from "../actions";

const Shop = () => {
    const itemCount = useSelector(state => state.itemCounter.portalGunCount)
    console.log(itemCount)
    const dispatch = useDispatch();
    const spacer = <div style={{width: '100%', height: 2}}></div>

    return (
        <div>
            <Typography variant='h2' id='pCount'>click item to add to cart</Typography>
            <Button variant='contained' color='secondary' onClick={() => dispatch(incrementPortalGun())}>portal gun</Button>
            {spacer}
            <Button variant='contained' color='secondary' onClick={() => dispatch(incrementSword())}>Sword</Button>
        </div>
    )
}

export default Shop;