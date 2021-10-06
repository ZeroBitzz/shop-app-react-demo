//mui imports
import { Button, Typography } from "@material-ui/core";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";

const Shop = () => {
    const itemCount = useSelector(state => state.itemCounter)
    console.log(itemCount)
    const dispatch = useDispatch();


    return (
        <div>
            <Typography variant='h1' id='pCount'>portal guns {itemCount}</Typography>
            <Button variant='contained' color='secondary' onClick={() => dispatch(increment())}>portal gun</Button>
        </div>
    )
}

export default Shop;